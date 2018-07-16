import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import colors from '../theme/colors'

class Logo extends Component {
  render() {
    return (
      <h2 className={css(styles.logo)}>Readable</h2>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    font: "900 42px/54px 'merriweather'",
    lineHeight: 0.81,
    textTransform: 'uppercase',
    border: '4px double',
    padding: '10px 20px',
    display: 'inline-block',
    borderRadius: 10,
    color: colors.background,
    background: colors.text,
  },
})

export default Logo
