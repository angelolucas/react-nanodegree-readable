import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Header from '../Header'
import Content from './Content'
import Comments from '../Comments'
import Footer from '../Footer'
import { spaces, breakpoint } from '../../theme'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <Header />
        <div className={css(styles.content)}>
          <Content post={post} />
          <Comments postID={post.id} />
        </div>
        <Footer />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: spaces.x2,

    [breakpoint.small]: { padding: spaces.x1 },
  },
})

Post.propTypes = { post: PropTypes.object.isRequired }

export default Post
