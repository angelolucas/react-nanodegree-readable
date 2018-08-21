import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'
import { storePostsByCategory } from '../actions/posts'
import sort from '../utils/sort'

class Category extends Component {
  currentCategory = ''

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextCategory = nextProps.match.params.category

    if (nextCategory !== this.currentCategory) {
      this.currentCategory = nextCategory

      this.props.storePostsByCategory(this.currentCategory)
    }
  }

  title = () => {
    const { categories } = this.props

    if (categories.length > 0) {
      const category = categories.find(
        category => category.path === this.currentCategory
      )

      return category.name
    }
  }

  render() {
    const { sortBy, posts } = this.props

    return (
      <div>
        <h1>{this.title()}</h1>
        <Posts posts={sort(posts, sortBy)} />
      </div>
    )
  }
}

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  storePostsByCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

const mapStateToProps = ({ posts, sortBy, categories }) => ({
  posts,
  sortBy,
  categories,
})

const mapDispatchToProps = dispatch => {
  return { storePostsByCategory: data => dispatch(storePostsByCategory(data)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
