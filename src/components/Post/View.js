import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import { colors, spaces, buttons, breakpoint } from '../../theme'
import { deletePost } from '../../actions/posts'
import VoteScore from '../VoteScore'

class View extends Component {
  handleDelete = () => {
    const { id, history, dispatch } = this.props

    dispatch(deletePost(id)).then(() => history.push('/'))
  }

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
            title="Edit"
          >
            <Icon icon="pencil-alt" />
          </button>
          <button
            className={css(styles.button)}
            onClick={this.handleDelete}
            type="button"
            title="Delete"
          >
            <Icon icon="trash" />
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
}

const styles = StyleSheet.create({
  view: {
    marginBottom: spaces.x2,
    padding: 10,

    [breakpoint.small]: { padding: 0 },
  },

  title: {
    marginTop: 0,
    marginBottom: spaces.x2,
    wordBreak: 'break-word',
  },

  summary: {
    color: colors.gray,
    marginBottom: spaces.x2,
    wordBreak: 'break-word',
  },

  footer: {
    display: 'flex',
    paddingTop: spaces.x1,
    paddingBottom: spaces.x1,
  },

  voteScore: {
    flex: 'auto',
    textAlign: 'center',
  },

  button: {
    ...buttons.smallLight,
    color: colors.gray,

    ':hover': { color: colors.details },
  },
})

export default connect()(View)
