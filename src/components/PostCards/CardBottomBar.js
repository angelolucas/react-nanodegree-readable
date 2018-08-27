import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors } from '../../theme'
import VoteScore from '../VoteScore'

class CardBottomBar extends Component {
  render() {
    const { id, commentCount, voteScore } = this.props

    return (
      <ul className={css(styles.bottomBar)}>
        <li>
          <Icon icon="comment-alt" />
          <strong className={css(styles.commentCount)}>{commentCount}</strong>
        </li>
        <li>
          <VoteScore id={id} contentType="post" score={voteScore} />
        </li>
        <li>
          <Icon icon="ellipsis-h" />
        </li>
      </ul>
    )
  }
}

CardBottomBar.propTypes = {
  id: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: 14,
    color: colors.gray,
    padding: 0,
    paddingTop: 5,
  },

  commentCount: { marginLeft: 5 },
})

export default CardBottomBar
