import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Textarea from 'react-textarea-autosize'
import serializeForm from 'form-serialize'
import { spaces, buttons } from '../../theme'
import ReactMarkdown from 'react-markdown'
import { editPost, deletePost } from '../../actions/posts'

class Content extends Component {
  /**
   * This component has the viewing and editing mode
   */
  state = {
    editMode: false,
    titleEdition: this.props.title,
    bodyEdition: this.props.body,
  }

  handleEdit = e => {
    const values = serializeForm(e.target, { hash: true })

    e.preventDefault()

    if (values.title && values.body) {
      this.props.dispatch(
        editPost(this.props.id, {
          timestamp: Date.now(),
          title: values.title,
          body: values.body,
        })
      )
      this.editMode(false)
    }
  }

  cancelEdition = () => {
    this.setState({
      editMode: false,
      titleEdition: this.props.title,
      bodyEdition: this.props.body,
    })
  }

  delete = () => {
    const { id, history } = this.props

    this.props.dispatch(deletePost(id)).then(() => history.push('/'))
  }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { title, body } = this.props
    const { editMode } = this.state

    return (
      <main className={css(styles.post)}>
        {editMode ? (
          <form onSubmit={this.handleEdit}>
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
              name="title"
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
              name="body"
              onChange={e => {
                this.setState({ bodyEdition: e.target.value })
              }}
            />
            <button className={css(styles.save)}>save</button>
            <button
              className={css(styles.button)}
              onClick={() => this.cancelEdition()}
              type="button"
            >
              cancel
            </button>
            <button
              className={css(styles.button)}
              onClick={() => this.delete()}
              type="button"
            >
              delete
            </button>
          </form>
        ) : (
          <div>
            <h1 className={css(styles.title)}>{title}</h1>
            <ReactMarkdown className={css(styles.body)} source={body} />
            <button
              className={css(styles.button)}
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  post: { marginBottom: spaces.x2 },

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

  button: {
    float: 'right',
    ...buttons.smallLight,
  },

  save: {
    float: 'right',
    ...buttons.small,
  },
})

export default connect()(Content)
