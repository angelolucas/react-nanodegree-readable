import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'

class Categories extends Component {
  render() {
    let { categories } = this.props

    return (
      <ul>
        {categories.map((category, key) => (
          <li className={css(styles.item)} key={key}>
            <NavLink
              to={`/${category.path}`}
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

Categories.propTypes = { categories: PropTypes.array.isRequired }

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  item: {
    display: 'inline-block',
    padding: 10,
  },
  currentItem: { fontWeight: 'bold' },
})

export default connect(mapStateToProps)(Categories)