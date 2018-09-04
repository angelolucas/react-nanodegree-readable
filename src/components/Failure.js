import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

class Failure extends Component {
  render() {
    return (
      <div className={css(styles.error)}>
        <div>
          <h1 className={css(styles.message)}>
            {this.props.error} <Icon icon="skull" />
          </h1>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  message: {
    display: 'block',
    fontSize: 38,
  },
})

Failure.propTypes = { error: PropTypes.string }

export default Failure
