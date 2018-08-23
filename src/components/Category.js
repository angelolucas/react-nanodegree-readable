import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'
import { storePosts } from '../actions/posts'
import sort from '../utils/sort'
import Loading from './Loading'
import Failure from './Failure'

class Category extends Component {
  category = this.props.match.params.category

  UNSAFE_componentWillMount() {
    this.props.storePosts({ category: this.category })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextCategory = nextProps.match.params.category

    if (nextCategory !== this.category) {
      this.category = nextCategory

      this.props.storePosts({ category: this.category })
    }
  }

  title = () => {
    const category = this.props.categories.find(
      category => category.path === this.category
    )

    if (category) return category.name
  }

  render() {
    const { sortBy, posts } = this.props

    return (
      <div>
        <h1>{this.title()}</h1>
        <Posts posts={sort(posts.data, sortBy)} />

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error={posts.failure} />}
      </div>
    )
  }
}

Category.propTypes = {
  posts: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  storePosts: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts, sortBy, categories }, props) => {
  posts.data = Object.keys(posts.data)
    .map(post => posts.data[post])
    .filter(post => post.category === props.match.params.category)

  return {
    posts,
    sortBy,
    categories,
  }
}

const mapDispatchToProps = dispatch => {
  return { storePosts: data => dispatch(storePosts(data)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
