import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { StyleSheet, css } from 'aphrodite/no-important'
import uuid from 'uuid'
import { spaces, colors } from '../../theme'

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
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="body"
          placeholder="Comment"
          className={css(styles.input, styles.textarea)}
        />
        <input
          className={css(styles.input)}
          type="text"
          placeholder="Name"
          name="author"
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
  input: {
    background: 'transparent',
    border: `2px solid ${colors.text}`,
    padding: 10,
    marginBottom: spaces.x1,
    width: 400,
    maxWidth: '100%',
  },

  textarea: {
    display: 'block',
    height: 200,
    resize: 'vertical',
  },

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
