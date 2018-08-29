import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { StyleSheet, css } from 'aphrodite/no-important'
import { buttons } from '../../../theme'

class View extends Component {
  render() {
    const { body } = this.props

    return (
      <div>
        <ReactMarkdown
          className={`markdown ${css(styles.markdown)}`}
          source={body}
        />

        {/* Show edit button */}
        <div className={css(styles.tools)}>
          <button
            onClick={() => this.props.toggleEditMode(true)}
            className={css(styles.button)}
          >
            edit
          </button>
        </div>
      </div>
    )
  }
}

View.propTypes = {
  body: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  markdown: {
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
  },

  tools: { float: 'right' },

  button: { ...buttons.smallLight },
})

export default View
