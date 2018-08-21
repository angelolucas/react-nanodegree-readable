import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'
import { storePostsByCategory } from '../actions/posts'
import sort from '../utils/sort'

class Category extends Component {
  state = { category: null }

  UNSAFE_componentWillMount() {
    this.dispatchPosts()
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const category = nextProps.match.params.category

    if (category !== this.state.category) {
      this.setState({ category })
      this.dispatchPosts()
    }
  }
  dispatchPosts() {
    const { match, dispatch } = this.props
    const category = match.params.category

    this.setState({ category })

    dispatch(storePostsByCategory(category))
  }
  render() {
    const { match, sortBy, postsByCategory } = this.props

    return (
      <div>
        <h1>{match.params.category}</h1>
        <Posts posts={sort(postsByCategory, sortBy)} />
      </div>
    )
  }
}

Category.propTypes = {
  postsByCategory: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
}

const mapStateToProps = ({ posts, sortBy }, props) => {
  const postsByCategory = posts
    ? posts.filter(post => post.category === props.match.params.category)
    : null

  return {
    postsByCategory,
    sortBy,
    posts,
  }
}

export default connect(mapStateToProps)(Category)
