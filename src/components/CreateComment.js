import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import { StyleSheet, css } from 'aphrodite/no-important'
import uuid from 'uuid'
import { buttons, spaces, breakpoint } from '../theme'
import { postComment } from '../actions/comments'
import { TextareaBody, InputAuthor } from './inputs'

class CommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault()

    const formInputs = serializeForm(e.target, { hash: true })

    if (formInputs.body && formInputs.author) {
      this.props.dispatch(
        postComment({
          id: uuid(),
          body: formInputs.body.trim(),
          author: formInputs.author,
          timestamp: Date.now(),
          parentId: this.props.postID,
        })
      )

      // Reset Form after post
      e.target.reset()
    }
  }

  render() {
    return (
      <form className={css(styles.form)} onSubmit={this.handleSubmit}>
        <TextareaBody
          minRows={5}
          placeholder="You may write comments in Markdown :)"
        />
        <InputAuthor />
        <button className={css(styles.button)}>Post Comment</button>
      </form>
    )
  }
}

CommentForm.propTypes = {
  postID: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  form: {
    textAlign: 'right',

    [breakpoint.medium]: { marginBottom: spaces.x2 },
  },

  button: { ...buttons.default },
})

export default connect()(CommentForm)
