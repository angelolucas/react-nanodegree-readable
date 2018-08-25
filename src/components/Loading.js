import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const loading = () => <div className={css(styles.loading)}>Loading</div>

const show = {
  '0%': {
    opacity: 0,
    height: 0,
  },
  '100%': {
    opacity: 1,
    height: 'auto',
  },
}

const styles = StyleSheet.create({
  loading: {
    opacity: 0,
    height: 0,
    animationName: show,
    animationDelay: '1s',
    animationFillMode: 'forwards',
  },
})

export default loading
