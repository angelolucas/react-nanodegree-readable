import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'
import { StyleSheet, css } from 'aphrodite/no-important'
import { fonts } from '../../theme'

class InputTitle extends Component {
  state = { value: this.props.value }

  render() {
    return (
      /**
       * Edit Title.
       *
       * `Textarea` rather than `input`
       * is for the title to behave as in the view.
       *
       * The inline style is because Aphrodite updates the `<style>` after
       * the `Textarea` component needs of it to calculate initial height.
       * https://github.com/andreypopp/react-textarea-autosize/issues/218
       */
      <Textarea
        name="title"
        value={this.state.value}
        placeholder="Post Title"
        className={css(styles.input)}
        style={{ ...styles.input._definition }}
        maxLength={80}
        onChange={e => {
          // Prevent line break
          const value = e.target.value.replace(/\n/g, '')

          this.setState({ value })
        }}
      />
    )
  }
}

InputTitle.propTypes = { value: PropTypes.string.isRequired }

const styles = StyleSheet.create({
  input: {
    ...fonts.titles,
    fontSize: 32,

    '::placeholder': {
      ...fonts.titles,
      fontSize: 32,
    },
  },
})

export default InputTitle
