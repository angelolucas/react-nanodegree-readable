import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import Textarea from 'react-textarea-autosize'
import uuid from 'uuid'
import { buttons } from '../theme'
import * as API from '../API'
import { storePosts } from '../actions/posts'
import { Columns, MainColumn } from './Grid/TwoColumns'

class Create extends Component {
  handleSubmit = e => {
    e.preventDefault()

    const values = serializeForm(e.target, { hash: true })

    if (values.title && values.body && values.author && values.category) {
      this.postPost({
        id: uuid(),
        timestamp: Date.now(),
        title: values.title,
        summary: values.summary,
        body: values.body.trim(),
        author: values.author,
        category: values.category,
      })
    }
  }

  postPost = post => {
    API.postPost(post)
      .then(this.props.dispatch(storePosts()))
      .then(
        /**
         * dispatch `getPosts()` triggers rendering of routes in App.js
         * `setTimeout` is to wait to finish this rendering
         */
        setTimeout(() => {
          this.goToPostPage(post)
        }, 100)
      )
  }

  goToPostPage = post => {
    const postPath = `/${post.category}/${post.id}`

    this.props.history.push(postPath)
  }

  render() {
    let { categories } = this.props

    return (
      <Columns>
        <MainColumn>
          <h1>Create Post</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Summary"
              name="summary"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Author"
              name="author"
              autoComplete="off"
            />
            <select name="category">
              <option>Select category</option>
              {categories.map(category => (
                <option key={category.path} value={category.path}>
                  {category.name}
                </option>
              ))}
            </select>
            <Textarea placeholder="body" minRows={10} name="body" />
            <button className={css(styles.submit)}>Save</button>
          </form>
        </MainColumn>
      </Columns>
    )
  }
}

Create.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({ submit: { ...buttons.default } })

export default connect(mapStateToProps)(Create)
