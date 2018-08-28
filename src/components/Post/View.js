import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { spaces, buttons } from '../../theme'

class View extends Component {
  render() {
    const { title, summary, body, switchEditMode } = this.props

    return (
      <div>
        <h1 className={css(styles.title)}>{title}</h1>
        {summary && <p className={css(styles.summary)}>{summary}</p>}
        <ReactMarkdown className={css(styles.body)} source={body} />
        <button
          className={css(styles.button)}
          onClick={() => switchEditMode(true)}
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
  switchEditMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    marginBottom: spaces.x1,
    wordBreak: 'break-all',
  },

  summary: {
    padding: 12,
    wordBreak: 'break-all',
  },

  body: {
    padding: 12,
    marginTop: 0,
    wordBreak: 'break-all',
  },

  button: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default View
