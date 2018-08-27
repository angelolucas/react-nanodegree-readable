import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, buttons } from '../../../theme'
import Header from './Header'
import Edit from './Edit'

class Comment extends Component {
  state = { editMode: false }

  editMode = (bool = true) => {
    if (bool) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { body } = this.props
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <Header {...this.props} />

        {editMode ? (
          <Edit {...this.props} editMode={this.editMode} />
        ) : (
          <div>
            <ReactMarkdown source={body} className={css(styles.body)} />

            {/* Show edit button */}
            <div className={css(styles.tools)}>
              <button
                onClick={() => this.editMode()}
                className={css(styles.button)}
              >
                edit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

Comment.propTypes = { body: PropTypes.string.isRequired }

const styles = StyleSheet.create({
  comment: {
    borderBottom: '1px solid',
    marginBottom: spaces.x2,
    paddingBottom: spaces.x2,
  },

  body: {
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
    whiteSpace: 'pre-wrap',
  },

  tools: { float: 'right' },

  button: { ...buttons.smallLight },
})

export default Comment
