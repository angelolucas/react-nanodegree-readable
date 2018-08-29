import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../../theme'
import date from '../../../utils/date'
import VoteScore from '../../VoteScore'

class Header extends Component {
  render() {
    const { id, author, timestamp, voteScore } = this.props

    return (
      <div>
        <span className={css(styles.author)}>{author}</span>
        <span className={css(styles.date)}>{date(timestamp)}</span>
        <span className={css(styles.voteScore)}>
          <VoteScore id={id} contentType="comment" score={voteScore} />
        </span>
      </div>
    )
  }
}

Header.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: spaces.x2,
    wordBreak: 'break-word',
  },

  date: { marginRight: spaces.x2 },
})

export default Header
