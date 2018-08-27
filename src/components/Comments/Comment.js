import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import ReactMarkdown from 'react-markdown'
import serializeForm from 'form-serialize'
import { spaces, buttons } from '../../theme'
import date from '../../utils/date'
import { deleteComment, editComment } from '../../actions/comments'
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
      this.props.dispatch(
        editComment(this.props.id, {
          timestamp: Date.now(),
          body,
        })
      )
      this.editMode(false)
    }
  }

  delete = () => {
    this.props.dispatch(deleteComment(this.props.id))
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
    const { id, author, timestamp, voteScore, body } = this.props
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <span className={css(styles.author)}>{author}</span>
        <span className={css(styles.date)}>{date(timestamp)}</span>
        <span className={css(styles.voteScore)}>
          <VoteScore id={id} contentType="comment" score={voteScore} />
        </span>

        {editMode ? (
          <form onSubmit={this.handleEdit}>
            {/* Textarea autosize */}
            <Textarea
              placeholder="You may write comments in Markdown ;)"
              className={css(styles.textarea)}
              defaultValue={body}
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
            <ReactMarkdown source={body} className={css(styles.body)} />

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
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
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

export default connect()(Comment)
