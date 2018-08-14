import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as moment from 'moment'
import { colors, spaces } from '../../theme'
import Logo from './Logo'
import Categories from './Categories'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <Categories />
        <Link to="/new-post">Creact post</Link>
        <div className={css(styles.horizontalLine)}>
          <h5 className={css(styles.date)}>
            {moment(Date.now()).format('dddd, MMMM Do YYYY')}
          </h5>
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: spaces.x2,
  },

  horizontalLine: {
    position: 'relative',

    ':before': {
      content: "''",
      position: 'absolute',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      borderBottomColor: colors.text,
      left: '0',
      top: 'calc(50% - 2px)',
      width: '100%',
    },
  },

  date: {
    display: 'inline-block',
    background: colors.background,
    position: 'relative',
    padding: 10,
    zIndex: 2,
  },
})

export default Header
