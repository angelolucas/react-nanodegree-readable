import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, breakpoint } from '../../theme'

class Logo extends Component {
  render() {
    return (
      <div>
        <h2 className={css(styles.noMargin)}>
          <Link className={css(styles.readable)} to="/">
            Readable
          </Link>
        </h2>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  noMargin: { margin: 0 },

  readable: {
    backgroundColor: colors.details,
    letterSpacing: '-2px',
    lineHeight: 0.7,
    textTransform: 'uppercase',
    fontSize: 48,
    display: 'inline-block',
    marginTop: 0,
    marginBottom: 10,
    color: colors.light,
    padding: '10px 15px',

    [breakpoint.small]: { width: '100%' },

    ':hover': {
      backgroundColor: colors.dark,
      color: colors.details,
    },
  },
})

export default Logo
