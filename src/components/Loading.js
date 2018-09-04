import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from '../theme'

const loading = () => (
  <div className={css(styles.loading)}>
    <div>
      <div className={css(styles.dot)} />
      <div className={css(styles.dot)} />
      <div className={css(styles.dot)} />
    </div>
  </div>
)

const show = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
}

const dot = {
  '0%': { transform: 'scale(-1)' },
  '50%': { transform: 'scale(2)' },
}

const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    animationName: show,
    animationDelay: '1s',
    animationFillMode: 'forwards',
  },

  dot: {
    display: 'inline-block',
    borderRadius: '50%',
    margin: 10,
    width: 5,
    height: 5,
    background: colors.details,
    animationName: dot,
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.82, -0.74, 0.01, 2.07)',

    ':nth-child(2)': { animationDelay: '0.1s' },

    ':nth-child(3)': { animationDelay: '0.2s' },
  },
})

export default loading
