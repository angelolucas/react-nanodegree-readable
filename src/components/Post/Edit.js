import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import { spaces, colors, buttons } from '../../theme'
import { editPost } from '../../actions/posts'
import { TextareaTitle, TextareaSummary, TextareaBody } from '../inputs'

class Edit extends Component {
  handleEdit = e => {
    const { id, toggleEditMode, dispatch } = this.props
    const values = serializeForm(e.target, { hash: true })

    e.preventDefault()

    if (values.title && values.body) {
      dispatch(
        editPost(id, {
          timestamp: Date.now(),
          title: values.title,
          summary: values.summary ? values.summary : '',
          body: values.body,
        })
      )

      toggleEditMode(false)
    }
  }

  cancel = () => this.props.toggleEditMode(false)

  render() {
    const { title, summary, body } = this.props

    return (
      <form onSubmit={this.handleEdit} className={css(styles.edit)}>
        <TextareaTitle defaultValue={title} />
        <TextareaSummary defaultValue={summary} />
        <TextareaBody defaultValue={body} />

        {/* Delete, Cancel and Save buttons */}
        <div className={css(styles.buttons)}>
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
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  edit: { marginBottom: spaces.x2 },

  buttons: {
    position: 'sticky',
    bottom: 0,
    background: colors.light,
    paddingTop: spaces.x1,
    paddingBottom: spaces.x1,
    marginTop: -21,
    boxShadow: '0px -2px 1px -2px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  button: {
    ...buttons.smallLight,
    padding: '5px 10px 4px',
  },

  save: {
    float: 'right',
    ...buttons.small,
  },
})

export default connect()(Edit)
