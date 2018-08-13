import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import Comments from '../Comments'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <Content post={post} />
        <Comments postID={post.id} />
      </div>
    )
  }
}

Post.propTypes = { post: PropTypes.object.isRequired }

export default Post
