import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Comment from './Comment'
import { spaces } from '../../theme'

class Comments extends Component {
  render() {
    const { comments } = this.props

    const title =
      comments && comments.length > 0
        ? `${comments.length} Comments`
        : 'No Comments'

    return (
      <div className={css(styles.comments)}>
        <h3 className={css(styles.title)}>{title}</h3>
        {comments &&
          comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
      </div>
    )
  }
}

Comments.propTypes = { comments: PropTypes.array }

const styles = StyleSheet.create({
  comments: { marginBottom: spaces.x3 },
  title: { marginBottom: spaces.x2 },
})

export default Comments
