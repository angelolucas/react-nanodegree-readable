import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, breakpoint } from '../../theme'

export const Columns = ({ children, ...props }) => (
  <div {...props} className={css(styles.columns)}>
    {children}
  </div>
)

export const MainColumn = ({ children, ...props }) => (
  <div {...props} className={css(styles.main)}>
    {children}
  </div>
)

export const SideColumn = ({ children, ...props }) => (
  <div {...props} className={css(styles.side)}>
    {children}
  </div>
)

const styles = StyleSheet.create({
  columns: {
    display: 'flex',
    width: '100%',

    [breakpoint.medium]: { flexDirection: 'column' },
  },

  main: {
    flex: '0 1 70%',

    [breakpoint.medium]: { flex: '100%' },
  },

  side: {
    marginLeft: spaces.x2,
    flex: '0 1 30%',
    position: 'relative',

    [breakpoint.medium]: {
      flex: '100%',
      marginLeft: 0,
    },
  },
})

Columns.propTypes = { children: PropTypes.node }

MainColumn.propTypes = { children: PropTypes.node }

SideColumn.propTypes = { children: PropTypes.node }
