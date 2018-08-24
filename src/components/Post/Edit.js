import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import serializeForm from 'form-serialize'
import { buttons } from '../../theme'
import { editPost, deletePost } from '../../actions/posts'

class Edit extends Component {
  state = {
    title: this.props.title,
    body: this.props.body,
  }

  handleEdit = e => {
    const { id, editPost, editMode } = this.props
    const values = serializeForm(e.target, { hash: true })

    e.preventDefault()

    if (values.title && values.body) {
      editPost(id, {
        timestamp: Date.now(),
        title: values.title,
        body: values.body,
      })

      editMode(false)
    }
  }

  cancel = () => {
    this.setState({
      title: this.props.title,
      body: this.props.body,
    })

    this.props.editMode(false)
  }

  handleDelete = () => {
    const { id, history, deletePost } = this.props

    deletePost(id).then(() => history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.handleEdit}>
        {/**
         * Edit title.
         * `Textarea` rather than `input`
         * is for the title to behave as in the view
         */}
        <Textarea
          name="title"
          value={this.state.title}
          placeholder="Post Title"
          className={css(styles.title)}
          style={{ fontSize: '32px' }} // https://goo.gl/oFJreG
          autoFocus
          onChange={e => {
            const title = e.target.value.replace(/\n/g, '') // Prevent line break

            this.setState({ title })
          }}
        />

        {/* Edit Body */}
        <Textarea
          name="body"
          value={this.state.body}
          placeholder="Post Body"
          onChange={e => {
            this.setState({ body: e.target.value })
          }}
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
