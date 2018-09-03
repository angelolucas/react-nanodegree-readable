import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, breakpoint } from '../theme'

class CategoryName extends Component {
  render() {
    const category = this.props.categories.find(
      category => category.path === this.props.path
    )

    return (
      <strong>
        {category && (
          <Link className={css(styles.link)} to={`/${category.path}`}>
            {category.name}
          </Link>
        )}
      </strong>
    )
  }
}

CategoryName.propTypes = {
  path: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  link: {
    color: colors.dark,

    ':hover': { color: colors.details },

    [breakpoint.small]: { color: colors.details },
  },
})

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(CategoryName)
