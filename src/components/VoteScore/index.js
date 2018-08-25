import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { voteComment } from '../../actions/comments'
import { votePost } from '../../actions/posts'
import { colors } from '../../theme'
import localVoteStorage, { checkVote } from './localVoteStorage'

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

    // Store vote on localStorage
    localVoteStorage(id, choice)

    this.props.dispatch(vote())
  }

  render() {
    const { id, score } = this.props

    return (
      <div className={css(styles.voteScore)}>
        <button
          title="Up vote"
          onClick={() => this.handleVote('upVote')}
          className={css(
            styles.button,
            checkVote(id, 'upVote') && styles.selected
          )}
        >
          <Icon icon="thumbs-up" />
        </button>
        <span className={css(styles.score)}>{score}</span>
        <button
          title="Down vote"
          onClick={() => this.handleVote('downVote')}
          className={css(
            styles.button,
            checkVote(id, 'downVote') && styles.selected
          )}
        >
          <Icon icon="thumbs-down" />
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
    boxSizing: 'content-box',
    margin: 0,
    fontSize: 15,
    width: 20,
    height: 20,
    padding: 3,
    color: colors.gray,
  },

  selected: { color: colors.dark },

  voteScore: { display: 'inline-block' },

  score: {
    minWidth: 30,
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default connect()(voteScore)
