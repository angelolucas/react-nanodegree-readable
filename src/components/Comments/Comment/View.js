import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { StyleSheet, css } from 'aphrodite/no-important'
import { buttons, colors } from '../../../theme'
import { deleteComment } from '../../../actions/comments'
import VoteScore from '../../VoteScore'

class View extends Component {
  handleDelete = () => {
    const { id, dispatch } = this.props

    dispatch(deleteComment(id))
  }

  render() {
    const { id, body, voteScore } = this.props

    return (
      <div>
        <ReactMarkdown
          className={`markdown ${css(styles.markdown)}`}
          source={body}
        />
        <div className={css(styles.footer)}>
          <VoteScore
            className={css(styles.voteScore)}
            id={id}
            contentType="comment"
            score={voteScore}
          />
          <button
            onClick={() => this.props.toggleEditMode(true)}
            className={css(styles.button)}
            title="Edit"
          >
            <Icon icon="pencil-alt" />
          </button>
          <button
            className={css(styles.button)}
            onClick={this.handleDelete}
            type="button"
            title="Delete"
          >
            <Icon icon="trash" />
          </button>
        </div>
      </div>
    )
  }
}

View.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  markdown: {
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },

  footer: { display: 'flex' },

  voteScore: {
    flex: 'auto',
    textAlign: 'center',
  },

  button: {
    ...buttons.smallLight,
    color: colors.gray,

    ':hover': { color: colors.details },
  },
})

export default connect()(View)
