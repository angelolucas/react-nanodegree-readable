import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'
import { StyleSheet, css } from 'aphrodite/no-important'
import { fonts } from '../../theme'

class TextareaTitle extends Component {
  state = { value: this.props.defaultValue }

  render() {
    const { className, defaultValue, value, ...rest } = this.props
    const classFromProps = className ? className : ''
    const bigAsTitle = {
      ...fonts.titles,
      fontSize: 32,
    }

    return (
      /**
       * `Textarea` rather than `input`
       * is for the title to behave as in the view.
       *
       * Parameters after `{...this.props}` is to prevent overwriting
       *
       * The inline style is because Aphrodite updates the `<style>` after
       * the `Textarea` component needs of it to calculate initial height.
       * https://github.com/andreypopp/react-textarea-autosize/issues/218
       */
      <Textarea
        name="title"
        placeholder="Post Title"
        maxLength={80}
        {...rest}
        value={this.state.value}
        onChange={e => {
          // Prevent line break
          const value = e.target.value.replace(/\n/g, '')

          this.setState({ value })
        }}
        style={bigAsTitle}
        className={`${css(styles.placeholder)} ${classFromProps}`}
      />
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    '::placeholder': {
      ...fonts.titles,
      fontSize: 32,
    },
  },
})

TextareaTitle.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
}

export default TextareaTitle
