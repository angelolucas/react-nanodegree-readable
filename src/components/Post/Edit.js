import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import serializeForm from 'form-serialize'
import { buttons } from '../../theme'
import { editPost, deletePost } from '../../actions/posts'

class Edit extends Component {
  state = { title: this.props.title }

  handleEdit = e => {
    const { id, editPost, editMode } = this.props
    const values = serializeForm(e.target, { hash: true })

    e.preventDefault()

    if (values.title && values.body) {
      editPost(id, {
        timestamp: Date.now(),
        title: values.title,
        summary: values.summary ? values.summary : '',
        body: values.body,
      })

      editMode(false)
    }
  }

  cancel = () => this.props.editMode(false)

  handleDelete = () => {
    const { id, history, deletePost } = this.props

    deletePost(id).then(() => history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.handleEdit}>
        {/**
         * Edit Title.
         *
         * `Textarea` rather than `input`
         * is for the title to behave as in the view.
         *
         * Inline style is a hacky: https://goo.gl/oFJreG
         */}
        <Textarea
          name="title"
          value={this.state.title}
          placeholder="Post Title"
          className={css(styles.title)}
          style={{ fontSize: '32px' }}
          autoFocus
          onChange={e => {
            // Prevent line break
            const title = e.target.value.replace(/\n/g, '')

            this.setState({ title })
          }}
        />

        {/* Edit Summary */}
        <Textarea
          name="summary"
          defaultValue={this.props.summary}
          placeholder="Post Summary"
        />

        {/* Edit Body */}
        <Textarea
          name="body"
          defaultValue={this.props.body}
          placeholder="Post Body"
        />

        {/* Delete, Cancel and Save buttons */}
        <div className={css(styles.buttons)}>
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
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  history: PropTypes.object,
  editMode: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: '32px',
    '::placeholder': { fontSize: 32 },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  button: { ...buttons.smallLight },

  save: {
    float: 'right',
    ...buttons.small,
  },
})

const mapDispatchToProps = dispatch => {
  return {
    editPost: (id, changes) => dispatch(editPost(id, changes)),
    deletePost: id => dispatch(deletePost(id)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Edit)
