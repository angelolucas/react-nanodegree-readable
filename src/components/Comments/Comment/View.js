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
        <ReactMarkdown source={body} className={css(styles.body)} />

        {/* Show edit button */}
        <div className={css(styles.tools)}>
          <button
            onClick={() => this.props.editMode(true)}
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
  editMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  body: {
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
    whiteSpace: 'pre-wrap',
  },

  tools: { float: 'right' },

  button: { ...buttons.smallLight },
})

export default View
