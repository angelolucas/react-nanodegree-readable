import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from '../../../theme'

class Category extends Component {
  render() {
    const category = this.props.categories.find(
      category => category.path === this.props.path
    )

    return (
      <strong className={css(styles.category)}>
        <Link className={css(styles.link)} to={`/${category.path}`}>
          {category.name}
        </Link>
      </strong>
    )
  }
}

Category.propTypes = {
  path: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  category: {
    ':before': {
      content: '"-"',
      margin: '0 5px',
    },
  },

  link: { color: colors.dark },
})

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(Category)
