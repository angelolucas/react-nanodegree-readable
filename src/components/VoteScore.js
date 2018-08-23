import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { voteComment } from '../actions/comments'
import { votePost } from '../actions/posts'
import { buttons } from '../theme'

class voteScore extends Component {
  handleVote = choice => {
    const { id, contentType, score } = this.props

    /*
     * Changes on content type (post or comment)
     * This is useful for reducer to apply `EDIT_POST` or `EDIT_COMMENT` case
     */
    const changes = { voteScore: choice === 'upVote' ? score + 1 : score - 1 }

    const vote = () => {
      // `choice` as parameter is useful for server
      return contentType === 'post'
        ? votePost(id, changes, choice)
        : voteComment(id, changes, choice)
    }

    this.props.dispatch(vote())
  }

  render() {
    return (
      <div className={css(styles.voteScore)}>
        <button
          className={css(styles.button)}
          title="Up vote"
          onClick={() => this.handleVote('upVote')}
        >
          <svg viewBox="0 0 100 75" width="15">
            <polygon points="50,0 100,75, 0,75 " />
          </svg>
        </button>
        <span className={css(styles.score)}>{this.props.score}</span>
        <button
          className={css(styles.button)}
          title="Down vote"
          onClick={() => this.handleVote('downVote')}
        >
          <svg viewBox="0 0 100 75" width="15">
            <polygon points="0,0 100,0 50,75 " />
          </svg>
        </button>
      </div>
    )
  }
}

voteScore.propTypes = {
  score: PropTypes.number.isRequired,
  contentType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  button: {
    ...buttons.smallLight,
    margin: 0,
  },

  voteScore: { display: 'inline-block' },

  score: {
    minWidth: 30,
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default connect()(voteScore)
