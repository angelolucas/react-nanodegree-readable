import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, colors } from '../../theme'

class CommentForm extends Component {
  render() {
    return (
      <form>
        <textarea
          placeholder="Comment"
          className={css(styles.input, styles.textarea)}
        />
        <input className={css(styles.input)} type="text" placeholder="Name" />
        <button className={css(styles.button)} type="button">
          Post Comment
        </button>
      </form>
    )
  }
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
