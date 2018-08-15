import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import serializeForm from 'form-serialize'
import * as API from '../../API'
import { spaces, buttons } from '../../theme'
import date from '../../utils/date'
import VoteScore from '../VoteScore'

class Comment extends Component {
  /**
   * This component has the viewing and editing mode
   */
  state = { editMode: false }

  handleEdit = e => {
    const body = serializeForm(e.target, { hash: true }).body

    e.preventDefault()

    if (body) {
      this.editComment({
        id: this.props.comment.id,
        changes: {
          timestamp: Date.now(),
          body,
        },
      })

      this.editMode(false)
    }
  }

  editComment = comment => {
    API.editComment(comment).then(this.props.renderComments)
  }

  delete = () => {
    const { comment, renderComments } = this.props

    API.deleteComment(comment.id).then(renderComments)
  }

  cancelEdition = () => {
    this.editMode(false)
  }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { comment } = this.props
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <span className={css(styles.author)}>{comment.author}</span>
        <span className={css(styles.date)}>{date(comment.timestamp)}</span>
        <span className={css(styles.voteScore)}>
          <VoteScore
            score={comment.voteScore}
            contentType="comment"
            contentId={comment.id}
          />
        </span>

        {editMode ? (
          <form onSubmit={this.handleEdit}>
            {/* Textarea autosize */}
            <Textarea
              className={css(styles.textarea)}
              defaultValue={comment.body}
              name="body"
              autoFocus
            />

            {/* Delete, cancel and save buttons */}
            <div className={css(styles.tools)}>
              <button
                className={css(styles.button)}
                onClick={this.delete}
                type="button"
              >
                delete
              </button>
              <button
                className={css(styles.button)}
                onClick={this.cancelEdition}
                type="button"
              >
                cancel
              </button>
              <button className={css(styles.save)}>save</button>
            </div>
          </form>
        ) : (
          <div>
            <p className={css(styles.body)}>{comment.body}</p>

            {/* Show edit button */}
            <div className={css(styles.tools)}>
              <button
                onClick={() => this.editMode()}
                className={css(styles.button)}
              >
                edit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  renderComments: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  comment: {
    borderBottom: '1px solid',
    marginBottom: spaces.x2,
    paddingBottom: spaces.x2,
  },

  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: spaces.x2,
  },

  date: { marginRight: spaces.x2 },

  textarea: {
    marginTop: 5,
    marginBottom: 5,
  },

  body: {
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
    whiteSpace: 'pre-wrap',
  },

  tools: { float: 'right' },

  button: { ...buttons.smallLight },

  save: { ...buttons.small },
})

export default Comment
