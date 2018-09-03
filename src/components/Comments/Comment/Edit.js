import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import { buttons } from '../../../theme'
import { editComment } from '../../../actions/comments'
import { TextareaBody } from '../../inputs'

class Edit extends Component {
  handleEdit = e => {
    const { dispatch, toggleEditMode } = this.props
    const body = serializeForm(e.target, { hash: true }).body

    e.preventDefault()

    if (body) {
      dispatch(
        editComment(this.props.id, {
          timestamp: Date.now(),
          body,
        })
      )

      toggleEditMode(false)
    }
  }

  cancel = () => this.props.toggleEditMode(false)

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
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  body: { marginBottom: 10 },
  save: { ...buttons.small },
  button: { ...buttons.smallLight },
  tools: { textAlign: 'right' },
})

export default connect()(Edit)
