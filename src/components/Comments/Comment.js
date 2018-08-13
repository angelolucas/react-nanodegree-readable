import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-autosize-textarea'
import * as API from '../../API'
import { colors, spaces } from '../../theme'
import date from '../../utils/date'

class Comment extends Component {
  /**
   * This component has the viewing and editing mode
   */
  state = { editMode: false }

  cancelEdition = () => {
    this.editMode(false)
  }

  saveEdition = () => {
    const { comment, renderComments } = this.props

    API.editComment({
      id: comment.id,
      changes: {
        timestamp: Date.now(),
        body: this.textarea.value.trim(),
      },
    }).then(renderComments)

    this.editMode(false)
  }

  delete = () => {
    const { comment, renderComments } = this.props

    API.deleteComment(comment.id).then(renderComments)
  }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })

      this.textarea.focus()
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
        <span className={css(styles.voteScore)}>{comment.voteScore}</span>

        {!editMode && <p className={css(styles.body)}>{comment.body}</p>}

        {/**
         * TextareaAutosize
         * For some reasons, it was necessary to hide in the dom
         * instead of show/erase
         */}
        <Textarea
          className={editMode ? css(styles.textarea) : 'hidden'}
          defaultValue={comment.body}
          innerRef={ref => (this.textarea = ref)}
        />

        {editMode ? (
          // Show delete (comment) and cancel (editing) buttons
          <div className={css(styles.tools)}>
            <button className={css(styles.tool)} onClick={this.delete}>
              delete
            </button>
            <button onClick={this.cancelEdition} className={css(styles.tool)}>
              cancel
            </button>
            <button
              className={css(styles.saveButton)}
              onClick={this.saveEdition}
            >
              save
            </button>
          </div>
        ) : (
          // Show edit button
          <div className={css(styles.tools)}>
            <button
              onClick={() => this.editMode()}
              className={css(styles.tool)}
            >
              edit
            </button>
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

  tools: {
    float: 'right',
    fontSize: 11,
  },

  tool: { padding: '10px' },

  saveButton: {
    backgroundColor: colors.text,
    color: colors.background,
    fontSize: 14,
    marginLeft: 10,
  },
})

export default Comment
