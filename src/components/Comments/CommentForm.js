import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import uuid from 'uuid'
import * as API from '../../API'
import { buttons } from '../../theme'

class CommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault()

    const formInputs = serializeForm(e.target, { hash: true })

    if (formInputs.body && formInputs.author) {
      this.postComment({
        id: uuid(),
        body: formInputs.body.trim(),
        author: formInputs.author,
        timestamp: Date.now(),
        parentId: this.props.postID,
      })

      // Reset Form after post
      e.target.reset()
    }
  }

  postComment = comment =>
    API.postComment(comment).then(this.props.renderComments)

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Textarea
          name="body"
          placeholder="Comment"
          className={css(styles.field, styles.textarea)}
          minRows={5}
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
  renderComments: PropTypes.func.isRequired,
  postID: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  textarea: { height: 200 },

  button: { ...buttons.default },
})

export default CommentForm
