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
          By <strong>{author}</strong> on {date(timestamp)}
          {showCategory && <Category path={category} />}
        </p>
        {!justMainInfo && <BottomBar {...this.props} />}
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
})

export default Card
