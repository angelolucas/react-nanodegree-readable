import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors } from '../../theme'
import ToggleSortBy from './ToggleSortBy'

class Menu extends Component {
  render() {
    return (
      <div className={css(styles.menu)} tabIndex="-1">
        <div className={css(styles.items)}>
          <ToggleSortBy className={css(styles.item)} />
          <Link className={css(styles.item)} to="/create-post">
            Creact Post
            <Icon icon="paper-plane" className={css(styles.icon)} />
          </Link>
        </div>
        <div className={css(styles.bars)}>
          <Icon icon="bars" />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    position: 'relative',
    outline: 'none',

    ':hover [class^=bars]': { color: colors.details },
    ':focus [class^=items]': { display: 'flex' },
  },

  bars: {
    fontSize: 16,
    height: '100%',
    padding: 10,
    cursor: 'pointer',
  },

  items: {
    paddingLeft: 50,
    background: `linear-gradient(to left, ${colors.light} 90%, transparent)`,
    position: 'absolute',
    right: '100%',
    bottom: 0,
    display: 'none',
  },

  item: {
    whiteSpace: 'nowrap',
    display: 'inlin-block',
    padding: 10,
    fontSize: 16,
    color: colors.dark,

    ':hover': { color: colors.details },
  },

  icon: { width: '27px!important' },
})

export default Menu
