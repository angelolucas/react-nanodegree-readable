import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as API from '../API'
import { storePosts } from '../actions/posts'
import { buttons } from '../theme'

class voteScore extends Component {
  vote = vote => {
    const { contentType, contentId } = this.props

    API.vote(contentType, vote, contentId).then(
      this.props.dispatch(storePosts())
    )
  }
  render() {
    return (
      <div className={css(styles.voteScore)}>
        <button
          className={css(styles.button)}
          title="Up vote"
          onClick={() => this.vote('upVote')}
        >
          <svg viewBox="0 0 100 75" width="15">
            <polygon points="50,0 100,75, 0,75 " />
          </svg>
        </button>
        <span className={css(styles.score)}>{this.props.score}</span>
        <button
          className={css(styles.button)}
          title="Down vote"
          onClick={() => this.vote('downVote')}
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
  contentId: PropTypes.string.isRequired,
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
