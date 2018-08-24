import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ReactMarkdown from 'react-markdown'
import { spaces, buttons } from '../../theme'
import Edit from './Edit'

class Content extends Component {
  state = { editMode: false }

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
          <Edit {...this.props} editMode={this.editMode} />
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
}

const styles = StyleSheet.create({
  post: { marginBottom: spaces.x2 },

  title: {
    padding: 12,
    marginBottom: spaces.x1,
  },

  body: {
    padding: 12,
    marginTop: 0,
  },

  button: {
    float: 'right',
    ...buttons.smallLight,
  },
})

export default connect()(Content)
