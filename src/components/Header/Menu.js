import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors, breakpoint } from '../../theme'
import ToggleSortBy from './ToggleSortBy'

class Menu extends Component {
  state = { open: false }

  toggleOpen = () => {
    const open = this.state.open ? false : true

    this.setState({ open })
  }

  handleBlur = e => {
    const targetOutside = !e.currentTarget.contains(e.relatedTarget)

    if (this.state.open && targetOutside) this.toggleOpen()
  }

  render() {
    const { open } = this.state

    return (
      <div className={css(styles.menu)} onBlur={this.handleBlur} tabIndex="-1">
        {open && (
          <div className={css(styles.items)}>
            <Link className={css(styles.item)} to="/create-post">
              <Icon icon="paper-plane" className={css(styles.icon)} />
              Creact Post
            </Link>
            <ToggleSortBy className={css(styles.item)} />
          </div>
        )}
        <div className={css(styles.bars)} onClick={this.toggleOpen}>
          {open ? <Icon icon="times" /> : <Icon icon="bars" />}
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  menu: { outline: 'none' },

  bars: {
    fontSize: 16,
    height: '100%',
    padding: 10,
    cursor: 'pointer',

    [breakpoint.small]: { marginRight: -10 },
  },

  items: {
    display: 'flex',
    background: colors.light,
    position: 'absolute',
    right: 30,
    bottom: 0,

    [breakpoint.small]: { left: 0 },
  },

  item: {
    whiteSpace: 'nowrap',
    display: 'inlin-block',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark,

    ':hover': { color: colors.details },
  },

  icon: { marginRight: 5 },
})

export default Menu
