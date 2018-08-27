import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { spaces, breakpoint, colors } from '../../theme'
import date from '../../utils/date'
import VoteScore from '../VoteScore'
import Category from './Category'

class Card extends Component {
  render() {
    const {
      id,
      title,
      author,
      summary,
      category,
      commentCount,
      timestamp,
      voteScore,
    } = this.props

    return (
      <li className={css(styles.card)}>
        <h2 className={css(styles.title)}>
          <Link className={css(styles.link)} to={`/${category}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className={css(styles.summary)}>{summary}</p>
        <p className={css(styles.by)}>
          By <strong>{author}</strong> on {date(timestamp)}
          {!category && <Category path={category} />}
        </p>
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
      </li>
    )
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  card: {
    flex: '33%',
    padding: spaces.x1,
    display: 'inline-block',

    [breakpoint.medium]: { flex: '50%' },
    [breakpoint.small]: { flex: '100%' },
  },

  title: {
    marginBottom: 5,
    lineHeight: 1.1,
  },

  link: { color: colors.dark },

  by: {
    fontSize: 14,
    color: colors.gray,
  },

  summary: {
    marginTop: 0,
    fontSize: 14,
    color: colors.gray,
  },

  commentCount: { marginLeft: 5 },

  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: 14,
    color: colors.gray,
    padding: 0,
    paddingTop: 5,
  },
})

export default Card
