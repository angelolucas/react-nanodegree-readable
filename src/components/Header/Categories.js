import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from '../../theme'

class Categories extends Component {
  render() {
    let { categories } = this.props

    return (
      <ul className={css(styles.list)}>
        {categories &&
          categories.map(category => (
            <li className={css(styles.item)} key={category.path}>
              <NavLink
                to={`/${category.path}`}
                className={css(styles.link)}
                activeClassName={css(styles.currentItem)}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
      </ul>
    )
  }
}

Categories.propTypes = { categories: PropTypes.array }

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  list: {
    minHeight: 40,
    display: 'inline-block',
    listStyle: 'none',
    padding: 0,
    marginBottom: 0,
    marginTop: 10,
  },

  item: {
    display: 'inline-block',
    padding: 10,
  },

  link: { color: colors.dark },

  currentItem: { fontWeight: 'bold' },
})

export default connect(mapStateToProps)(Categories)
