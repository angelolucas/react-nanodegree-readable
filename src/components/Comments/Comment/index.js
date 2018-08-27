import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { spaces, buttons } from '../../../theme'
import date from '../../../utils/date'
import VoteScore from '../../VoteScore'
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
    const { id, author, timestamp, voteScore, body } = this.props
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <span className={css(styles.author)}>{author}</span>
        <span className={css(styles.date)}>{date(timestamp)}</span>
        <span className={css(styles.voteScore)}>
          <VoteScore id={id} contentType="comment" score={voteScore} />
        </span>

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

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  comment: {
    borderBottom: '1px solid',
    marginBottom: spaces.x2,
    paddingBottom: spaces.x2,
  },

  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: spaces.x2,
  },

  date: { marginRight: spaces.x2 },

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
