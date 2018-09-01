import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { colors, spaces, buttons } from '../../theme'
import VoteScore from '../VoteScore'

class View extends Component {
  render() {
    const { title, summary, body, toggleEditMode, id, voteScore } = this.props

    return (
      <div className={css(styles.view)}>
        <h1 className={css(styles.title)}>{title}</h1>
        {summary && <p className={css(styles.summary)}>{summary}</p>}
        <ReactMarkdown
          className={`markdown ${css(styles.markdown)}`}
          source={body}
        />
        <div className={css(styles.footer)}>
          <VoteScore
            className={css(styles.voteScore)}
            id={id}
            contentType="post"
            score={voteScore}
          />
          <button
            className={css(styles.button)}
            onClick={() => toggleEditMode(true)}
          >
            edit
          </button>
        </div>
      </div>
    )
  }
}

View.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  view: { marginBottom: spaces.x2 },

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

  footer: { display: 'flex' },

  voteScore: {
    flex: 'auto',
    textAlign: 'center',
  },

  button: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default View
