import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'

class Comments extends Component {
  render() {
    const { comments } = this.props

    const title =
      comments && comments.length > 0
        ? `${comments.length} Comments`
        : 'No Comments'

    return (
      <div className={css(styles.container)}>
        <h3>{title}</h3>
        <ul>
          {comments &&
            comments.map(comment => (
              <li key={comment.id}>
                <h6>{comment.author}</h6>
                <p>{comment.body}</p>
                <span>{comment.voteScore}</span>
                <span>Edit</span>
                <span>Delete</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

Comments.propTypes = { comments: PropTypes.array }

const styles = StyleSheet.create({ container: { padding: spaces.x2 } })

export default Comments
