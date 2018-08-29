import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { colors, spaces, buttons } from '../../theme'

class View extends Component {
  render() {
    const { title, summary, body, toggleEditMode } = this.props

    return (
      <div>
        <h1 className={css(styles.title)}>{title}</h1>
        {summary && <p className={css(styles.summary)}>{summary}</p>}
        <ReactMarkdown
          className={`markdown ${css(styles.markdown)}`}
          source={body}
        />
        <button
          className={css(styles.button)}
          onClick={() => toggleEditMode(true)}
        >
          edit
        </button>
      </div>
    )
  }
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    marginTop: 0,
    marginBottom: spaces.x1,
    wordBreak: 'break-word',
  },

  summary: {
    color: colors.gray,
    padding: 10,
    marginBottom: spaces.x1,
    wordBreak: 'break-word',
  },

  markdown: { padding: 10 },

  button: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default View
