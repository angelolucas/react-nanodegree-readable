import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, colors, breakpoint } from '../../../theme'
import date from '../../../utils/date'
import CategoryName from '../../CategoryName'
import BottomBar from './BottomBar'

class Card extends Component {
  render() {
    const {
      id,
      title,
      author,
      summary,
      category,
      timestamp,
      showCategory,
      justMainInfo,
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
          By <strong>{author}</strong>
          <span className={css(styles.date)}>{date(timestamp)}</span>
          {showCategory && <CategoryName path={category} />}
        </p>
        {!justMainInfo && (
          <BottomBar className={css(styles.bottomBar)} {...this.props} />
        )}
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
  timestamp: PropTypes.number.isRequired,
  showCategory: PropTypes.bool.isRequired,
  justMainInfo: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  card: {
    flex: '1 1 400px',
    padding: spaces.x1,
    display: 'inline-block',
    alignSelf: 'self-end',

    ':hover': { background: 'white' },

    ':hover [class^=link]': { color: colors.details },

    ':hover [class^=bottomBar]': { opacity: 1 },

    [breakpoint.small]: {
      borderBottom: `1px solid ${colors.border}`,
      ':hover': { background: 'transparent' },
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  title: {
    marginTop: 0,
    marginBottom: 5,
    lineHeight: 1.1,
    wordBreak: 'break-word',
  },

  link: {
    color: colors.dark,

    [breakpoint.small]: { color: colors.details },
  },

  by: {
    fontSize: 14,
    color: colors.gray,
  },

  date: { margin: spaces.x1 },

  summary: {
    marginTop: 0,
    fontSize: 14,
    color: colors.gray,
    wordBreak: 'break-word',
  },

  bottomBar: {
    opacity: 0,

    [breakpoint.small]: { opacity: 1 },
  },
})

export default Card
