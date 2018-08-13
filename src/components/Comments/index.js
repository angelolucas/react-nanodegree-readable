import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as API from '../../API'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { spaces } from '../../theme'

class Comments extends Component {
  state = { comments: null }

  UNSAFE_componentWillMount() {
    this.getComments()
  }

  getComments = () => {
    API.getComments(this.props.postID).then(comments => {
      this.setState({ comments })
    })
  }

  render() {
    const { postID } = this.props
    const { comments } = this.state

    const title =
      comments && comments.length > 0
        ? `${comments.length} Comment(s)`
        : `No Comments`

    return (
      <div>
        <h3 className={css(styles.title)}>{title}</h3>
        {comments &&
          comments.map(comment => (
            <Comment
              comment={comment}
              renderComments={this.getComments}
              key={comment.id}
            />
          ))}
        <CommentForm renderComments={this.getComments} postID={postID} />
      </div>
    )
  }
}

const styles = StyleSheet.create({ title: { marginBottom: spaces.x2 } })

Comments.propTypes = { postID: PropTypes.string.isRequired }

export default Comments
