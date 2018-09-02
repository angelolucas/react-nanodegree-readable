import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, colors } from '../../../theme'
import date from '../../../utils/date'
import Category from './Category'
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
          By <strong className={css(styles.author)}>{author}</strong> on{' '}
          {date(timestamp)}
          {showCategory && <Category path={category} />}
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

    ':hover': { background: 'white' },
    ':hover [class^=link]': { color: colors.details },
    ':hover [class^=bottomBar]': { opacity: 1 },
  },

  title: {
    marginBottom: 5,
    lineHeight: 1.1,
    wordBreak: 'break-word',
  },

  link: { color: colors.dark },

  by: {
    fontSize: 14,
    color: colors.gray,
  },

  author: { wordBreak: 'break-word' },

  summary: {
    marginTop: 0,
    fontSize: 14,
    color: colors.gray,
    wordBreak: 'break-word',
  },

  bottomBar: { opacity: 0 },
})

export default Card
