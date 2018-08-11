import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as API from '../../API'
import Header from '../Header'
import Detail from './Detail'
import Comment from './Comment'
import CommentForm from './CommentForm'
import Footer from '../Footer'
import { spaces, breakpoint } from '../../theme'

class Post extends Component {
  state = { comments: null }

  UNSAFE_componentWillMount() {
    this.getComments()
  }

  postComment = comment => {
    API.postComment(comment).then(this.getComments())
  }

  deleteComment = comment => {
    API.deleteComment(comment).then(this.getComments())
  }

  getComments = () => {
    API.getComments(this.props.post.id).then(comments => {
      this.setState({ comments })
    })
  }

  render() {
    const { post } = this.props
    const { comments } = this.state

    const commentTitle =
      comments && comments.length > 0
        ? `${comments.length} Comments`
        : 'No Comments'

    return (
      <div>
        <Header />
        <div className={css(styles.content)}>
          <Detail post={post} />
          <h3 className={css(styles.commentTitle)}>{commentTitle}</h3>
          {comments &&
            comments.map(comment => (
              <Comment
                comment={comment}
                deleteComment={this.deleteComment}
                key={comment.id}
              />
            ))}
          <CommentForm
            postComment={this.postComment}
            parentID={this.props.post.id}
          />
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
  commentTitle: { marginBottom: spaces.x2 },
})

Post.propTypes = { post: PropTypes.object.isRequired }

export default Post
