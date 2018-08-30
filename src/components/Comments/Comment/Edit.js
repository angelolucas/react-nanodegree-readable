import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import { buttons } from '../../../theme'
import { deleteComment, editComment } from '../../../actions/comments'
import { TextareaBody } from '../../inputs'

class Edit extends Component {
  handleEdit = e => {
    const { editComment, toggleEditMode } = this.props
    const body = serializeForm(e.target, { hash: true }).body

    e.preventDefault()

    if (body) {
      editComment(this.props.id, {
        timestamp: Date.now(),
        body,
      })

      toggleEditMode(false)
    }
  }

  cancel = () => this.props.toggleEditMode(false)

  handleDelete = () => {
    const { id, deleteComment } = this.props

    deleteComment(id)
  }

  render() {
    return (
      <form onSubmit={this.handleEdit}>
        <TextareaBody
          defaultValue={this.props.body}
          placeholder="Edit comment"
          className={css(styles.body)}
          autoFocus
        />
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
  toggleEditMode: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  body: { marginBottom: 10 },
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
