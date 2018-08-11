import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { StyleSheet, css } from 'aphrodite/no-important'
import uuid from 'uuid'
import { colors } from '../../theme'

class CommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault()

    const formInputs = serializeForm(e.target, { hash: true })
    const parentId = this.props.parentID

    if (formInputs.body && formInputs.author) {
      this.props.postComment({
        id: uuid(),
        body: formInputs.body,
        author: formInputs.author,
        timestamp: Date.now(),
        parentId: parentId,
      })

      // Reset Form after post
      e.target.reset()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="body"
          placeholder="Comment"
          className={css(styles.field, styles.textarea)}
        />
        <input
          className={css(styles.field)}
          type="text"
          placeholder="Name"
          name="author"
          autoComplete="off"
        />
        <button className={css(styles.button)}>Post Comment</button>
      </form>
    )
  }
}

CommentForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  parentID: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  field: { width: 400 },

  textarea: { height: 200 },

  button: {
    background: colors.text,
    color: colors.background,
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: 14,
    display: 'block',
  },
})

export default CommentForm
