import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Content from './Content'
import Comments from '../Comments'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className={css(styles.post)}>
        <Content {...post} />
        <Comments postID={post.id} />
      </div>
    )
  }
}

Post.propTypes = { post: PropTypes.object.isRequired }

const styles = StyleSheet.create({ post: { maxWidth: 900 } })

export default Post
