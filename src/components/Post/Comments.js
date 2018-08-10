import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import date from '../../utils/date'

class Comments extends Component {
  render() {
    const { comments } = this.props

    const title =
      comments && comments.length > 0
        ? `${comments.length} Comments`
        : 'No Comments'

    return (
      <div className={css(styles.comments)}>
        <h3>{title}</h3>
        <ul>
          {comments &&
            comments.map(comment => (
              <li className={css(styles.comment)} key={comment.id}>
                <p className={css(styles.body)}>{comment.body}</p>
                <span className={css(styles.author)}>{comment.author}</span>
                <span className={css(styles.date)}>
                  {date(comment.timestamp)}
                </span>
                <span className={css(styles.voteScore)}>
                  {comment.voteScore}
                </span>
                <span className={css(styles.edit)}>edit</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

Comments.propTypes = { comments: PropTypes.array }

const styles = StyleSheet.create({
  comments: { marginBottom: spaces.x3 },
  comment: {
    borderBottom: '1px solid',
    marginBottom: spaces.x2,
    paddingBottom: spaces.x2,

    ':last-child': {
      borderBottom: 'none',
      paddingBottom: 0,
    },
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: spaces.x2,
  },
  date: { marginRight: spaces.x2 },
  edit: {
    float: 'right',
    fontSize: 11,
    padding: 10,
  },
})

export default Comments
