import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import { spaces, buttons } from '../../theme'
import date from '../../utils/date'

class Content extends Component {
  /**
   * This component has the viewing and editing mode
   */
  state = {
    editMode: false,
    titleEdition: this.props.title,
    bodyEdition: this.props.body,
  }

  cancelEdition = () => {
    this.setState({
      editMode: false,
      titleEdition: this.props.title,
      bodyEdition: this.props.body,
    })
  }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { timestamp, title, body, author, voteScore, category } = this.props
    const { editMode } = this.state

    return (
      <main className={css(styles.post)}>
        <ul className={css(styles.postInfo)}>
          <li className={css(styles.info)}>
            By <strong>{author}</strong> on {date(timestamp)}
          </li>
          <li className={css(styles.info)}>{voteScore} votes</li>
          <li className={css(styles.info)}>{category}</li>
        </ul>

        {editMode ? (
          <form>
            {/**
             * Edit title.
             * `Textarea` rather than input
             * is for the title to behave as in the view
             */}
            <Textarea
              placeholder="Post Title"
              className={css(styles.editTitle)}
              style={{ fontSize: '32px' }}
              value={this.state.titleEdition}
              autoFocus
              onChange={e => {
                // Prevent line break
                const titleEdition = e.target.value.replace(/\n/g, '')

                this.setState({ titleEdition })
              }}
            />

            {/* Edit Body */}
            <Textarea
              placeholder="Post body"
              className={css(styles.textarea)}
              value={this.state.bodyEdition}
              onChange={e => {
                this.setState({ bodyEdition: e.target.value })
              }}
            />
            <button
              className={css(styles.editButton)}
              onClick={() => this.cancelEdition()}
            >
              cancel
            </button>
          </form>
        ) : (
          <div>
            <h1 className={css(styles.title)}>{title}</h1>
            <p className={css(styles.body)}>{body}</p>
            <button
              className={css(styles.editButton)}
              onClick={() => this.editMode()}
            >
              edit
            </button>
          </div>
        )}
      </main>
    )
  }
}

Content.propTypes = {
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  post: { marginBottom: spaces.x2 },

  postInfo: {
    display: 'flex',
    marginBottom: 10,
  },

  info: { marginRight: spaces.x2 },

  title: {
    padding: 12,
    marginBottom: spaces.x1,
  },

  editTitle: {
    fontWeight: 'bold',

    '::placeholder': { fontSize: 32 },
  },

  body: {
    padding: 12,
    marginTop: 0,
  },

  editButton: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default Content
