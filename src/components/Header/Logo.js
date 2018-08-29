import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from '../../theme'

class Logo extends Component {
  render() {
    return (
      <div>
        <h2 className={css(styles.noMargin)}>
          <Link className={css(styles.logo, styles.readable)} to="/">
            Readable
          </Link>
          {/*<span className={css(styles.logo, styles.category)}>Javascript</span>*/}
        </h2>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  noMargin: { margin: 0 },

  logo: {
    letterSpacing: '-2px',
    lineHeight: 0.7,
    textTransform: 'uppercase',
    fontSize: 48,
    display: 'inline-block',
    marginTop: 0,
    color: colors.light,
    padding: '10px 15px',
  },

  readable: { backgroundColor: colors.details },

  category: { backgroundColor: colors.dark },
})

export default Logo
