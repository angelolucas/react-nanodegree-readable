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
  state = { currentVote: checkVote(this.props.id) } // upVote, downVote or null

  score = this.props.score

  handleVote = newVote => {
    const { currentVote } = this.state

    if (currentVote && currentVote === newVote) {
      this.cancel(newVote)
    } else if (currentVote) {
      this.cancel(currentVote)
      this.apply(newVote)
    } else {
      this.apply(newVote)
    }
  }

  cancel = vote => {
    if (vote === 'upVote') {
      this.handleDispatch('downVote')
    } else if (vote === 'downVote') {
      this.handleDispatch('upVote')
    }

    this.setState({ currentVote: null })
    localVoteStorage(this.props.id, null)
  }

  apply = vote => {
    // Store vote on localStorage
    localVoteStorage(this.props.id, vote)
    this.handleDispatch(vote)
    this.setState({ currentVote: vote })
  }

  handleDispatch = vote => {
    const { id, contentType, dispatch } = this.props

    /*
     * Changes on content type (post or comment)
     * This is useful for reducer to apply `EDIT_POST` or `EDIT_COMMENT` case
     */
    const voteScore = vote === 'upVote' ? this.score++ : this.score--

    const changes = { voteScore }

    // `vote` as parameter is useful for server
    dispatch(
      contentType === 'post'
        ? votePost(id, changes, vote)
        : voteComment(id, changes, vote)
    )
  }

  render() {
    const { currentVote } = this.state

    return (
      <div className={css(styles.voteScore)}>
        <button
          title="Up vote"
          onClick={() => this.handleVote('upVote')}
          className={css(
            styles.button,
            currentVote === 'upVote' && styles.selected
          )}
        >
          <Icon icon="thumbs-up" />
        </button>
        <span className={css(styles.score)}>{this.score}</span>
        <button
          title="Down vote"
          onClick={() => this.handleVote('downVote')}
          className={css(
            styles.button,
            currentVote === 'downVote' && styles.selected
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
