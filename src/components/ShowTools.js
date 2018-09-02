import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { colors } from '../theme'

export const ShowTools = ({ children, ...props }) => (
  <div className={css(styles.showTools)}>
    {children}
    <span className={css(styles.showToolsIcon)}>
      <Icon icon={props.icon} />
    </span>
  </div>
)

export const Tool = ({ children, ...props }) => (
  <div className={css(styles.toolContainer)} tabIndex="-1">
    {props.type === 'link' && (
      <Link to={props.to} title={props.title} className={css(styles.tool)}>
        {children}
        <Icon icon={props.icon} />
      </Link>
    )}
    {props.type === 'button' && (
      <button
        title={props.title}
        onClick={props.onClick}
        className={css(styles.tool)}
      >
        {children}
        <Icon icon={props.icon} />
      </button>
    )}
  </div>
)

const styles = StyleSheet.create({
  showTools: {
    ':hover [class^=showToolsIcon]': { color: colors.details },
    ':hover [class^=tool]': {
      opacity: 1,
      pointerEvents: 'default',
    },
  },

  showToolsIcon: { color: colors.gray },

  toolContainer: { display: 'inline-block' },

  tool: {
    color: colors.gray,
    padding: '3px 10px 3px 3px',
    opacity: 0,
    pointerEvents: 'none',

    ':hover': { color: colors.details },
  },
})

ShowTools.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
}

Tool.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.string,
}
