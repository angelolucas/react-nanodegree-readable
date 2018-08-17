import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'
import { getPostsByCategory } from '../actions/posts'

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

    dispatch(getPostsByCategory(category))
  }
  render() {
    const { match, postsByCategory } = this.props

    return (
      <div>
        <h1>{match.params.category}</h1>
        <Posts posts={postsByCategory} />
      </div>
    )
  }
}

Category.propTypes = {
  postsByCategory: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }, props) => {
  const postsByCategory = posts
    ? posts.filter(post => post.category === props.match.params.category)
    : null

  return {
    postsByCategory,
    posts,
  }
}

export default connect(mapStateToProps)(Category)
