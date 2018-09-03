import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, spaces, breakpoint } from '../../theme'

class Categories extends Component {
  render() {
    let { categories } = this.props

    return (
      <ul className={css(styles.categories)}>
        {categories.map(category => (
          <li className={css(styles.item)} key={category.path}>
            <Link to={`/${category.path}`} className={css(styles.link)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

Categories.propTypes = { categories: PropTypes.array.isRequired }

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  categories: {
    display: 'inline-block',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginLeft: spaces.x1,
    flex: 'auto',

    [breakpoint.small]: { marginLeft: 0 },
  },

  item: { display: 'inline-block' },

  link: {
    display: 'inline-block',
    color: colors.dark,
    fontWeight: 'bold',
    padding: 10,

    ':hover': { color: colors.details },

    [breakpoint.small]: { padding: '10px 6px' },
  },

  currentItem: { fontWeight: 'bold' },
})

export default connect(mapStateToProps)(Categories)
