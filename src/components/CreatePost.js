import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import Textarea from 'react-textarea-autosize'
import uuid from 'uuid'
import { buttons } from '../theme'
import slugify from '../utils/slugify'
import * as API from '../API'
import { getPosts } from '../actions/posts'

class Create extends Component {
  handleSubmit = e => {
    e.preventDefault()

    const formInputs = serializeForm(e.target, { hash: true })

    this.postPost({
      id: uuid(),
      timestamp: Date.now(),
      title: formInputs.title,
      body: formInputs.body.trim(),
      author: formInputs.author,
      category: formInputs.category,
    })
  }

  postPost = post => {
    API.postPost(post)
      .then(this.props.dispatch(getPosts()))
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
    const postPath = `/${post.category}/${slugify(post.title)}`

    this.props.history.push(postPath)
  }

  render() {
    let { categories } = this.props

    return (
      <div className={css(styles.wrapper)}>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" />
          <input type="text" placeholder="Author" name="author" />
          <select name="category">
            <option>Select category</option>
            {categories &&
              categories.map(category => (
                <option key={category.path} value={category.path}>
                  {category.name}
                </option>
              ))}
          </select>
          <Textarea placeholder="body" minRows={10} name="body" />
          <button className={css(styles.submit)}>Save</button>
        </form>
      </div>
    )
  }
}

Create.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  wrapper: { maxWidth: 900 },
  submit: { ...buttons.default },
})

export default connect(mapStateToProps)(Create)
