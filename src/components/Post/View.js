import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { spaces, buttons } from '../../theme'

class View extends Component {
  render() {
    const { title, body, editMode } = this.props

    return (
      <div>
        <h1 className={css(styles.title)}>{title}</h1>
        <ReactMarkdown className={css(styles.body)} source={body} />
        <button className={css(styles.button)} onClick={() => editMode(true)}>
          edit
        </button>
      </div>
    )
  }
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  editMode: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    marginBottom: spaces.x1,
  },

  body: {
    padding: 12,
    marginTop: 0,
  },

  button: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default View