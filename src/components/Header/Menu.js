import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors } from '../../theme'
import ToggleSortBy from './ToggleSortBy'

class Menu extends Component {
  render() {
    return (
      <div className={css(styles.menu)}>
        <div className={css(styles.items)}>
          <ToggleSortBy className={css(styles.item)} />
          <Link className={css(styles.item)} to="/create-post">
            Creact Post
            <Icon icon="paper-plane" className={css(styles.icon)} />
          </Link>
        </div>
        <button className={css(styles.toggleButton)}>
          <Icon icon="bars" />
        </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    textAlign: 'right',

    ':hover [class^=toggleButton]': { color: colors.details },
    ':hover [class^=items]': { opacity: 1 },
  },

  toggleButton: { fontSize: 20 },

  items: { opacity: 0 },

  item: {
    display: 'block',
    padding: '0 10px 2px',
    fontSize: 16,
    color: colors.dark,

    ':hover': { color: colors.details },
  },

  icon: { width: '27px!important' },
})

export default Menu
