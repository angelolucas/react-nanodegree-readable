import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, spaces } from '../../theme'
import date from '../../utils/date'

class Comment extends Component {
  /**
   * This component has the viewing and editing mode
   */
  state = { editMode: false }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })

      setTimeout(() => this.editableBody.focus())
    } else {
      this.setState({ editMode: false })
    }
  }

  cancelEditing = () => {
    this.editMode(false)
  }

  saveEdition = () => {
    this.editMode(false)
  }

  render() {
    const { comment } = this.props
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <span className={css(styles.author)}>{comment.author}</span>
        <span className={css(styles.date)}>{date(comment.timestamp)}</span>
        <span className={css(styles.voteScore)}>{comment.voteScore}</span>

        {editMode ? (
          /**
           * Edit body Comment
           * `contentEditable` enable us to edit a div like a textarea
           * `suppressContentEditableWarning` is to prevent console warning
           * https://github.com/facebook/draft-js/issues/53
           */
          <div
            contentEditable
            suppressContentEditableWarning
            ref={input => (this.editableBody = input)}
            className={css(styles.body, styles.editableBody)}
          >
            {comment.body}
          </div>
        ) : (
          // View body comment
          <p className={css(styles.body)}>{comment.body}</p>
        )}

        {editMode ? (
          // Show delete (comment) and cancel (editing) buttons
          <div className={css(styles.tools)}>
            <button className={css(styles.tool)}>delete</button>
            <button onClick={this.cancelEditing} className={css(styles.tool)}>
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

Comment.propTypes = { comment: PropTypes.object }

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

  body: {
    border: `2px solid transparent`,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },

  editableBody: {
    border: `2px solid ${colors.text}`,
    outline: 'none',
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