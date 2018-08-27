import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import serializeForm from 'form-serialize'
import { buttons } from '../../../theme'
import { deleteComment, editComment } from '../../../actions/comments'

class Edit extends Component {
  handleEdit = e => {
    const { editComment, switchEditMode } = this.props
    const body = serializeForm(e.target, { hash: true }).body

    e.preventDefault()

    if (body) {
      editComment(this.props.id, {
        timestamp: Date.now(),
        body,
      })

      switchEditMode(false)
    }
  }

  cancel = () => this.props.switchEditMode(false)

  handleDelete = () => {
    const { id, deleteComment } = this.props

    deleteComment(id)
  }

  render() {
    return (
      <form onSubmit={this.handleEdit}>
        {/* Textarea autosize */}
        <Textarea
          placeholder="You may write comments in Markdown ;)"
          className={css(styles.textarea)}
          defaultValue={this.props.body}
          name="body"
          autoFocus
        />

        {/* Delete, cancel and save buttons */}
        <div className={css(styles.tools)}>
          <button
            className={css(styles.button)}
            onClick={this.handleDelete}
            type="button"
          >
            delete
          </button>
          <button
            className={css(styles.button)}
            onClick={this.cancel}
            type="button"
          >
            cancel
          </button>
          <button className={css(styles.save)}>save</button>
        </div>
      </form>
    )
  }
}

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  switchEditMode: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  textarea: {
    marginTop: 5,
    marginBottom: 5,
  },
  save: { ...buttons.small },
  button: { ...buttons.smallLight },
  tools: { float: 'right' },
})

const mapDispatchToProps = dispatch => {
  return {
    editComment: (id, changes) => dispatch(editComment(id, changes)),
    deleteComment: id => dispatch(deleteComment(id)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Edit)