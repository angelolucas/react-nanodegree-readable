import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as API from '../../API'
import Header from '../Header'
import Detail from './Detail'
import Comments from './Comments'
import CommentForm from './CommentForm'
import Footer from '../Footer'
import { spaces, breakpoint } from '../../theme'

class Post extends Component {
  state = { comments: null }

  UNSAFE_componentWillMount() {
    API.getComments(this.props.post.id).then(comments =>
      this.setState({ comments })
    )
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <Header />
        <div className={css(styles.content)}>
          <Detail post={post} />
          <Comments comments={this.state.comments} />
          <CommentForm />
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
