import React, { Component } from 'react'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'
import uuid from 'uuid'
import * as API from '../../API'
import Textarea from 'react-autosize-textarea'
import { connect } from 'react-redux'

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

  postPost = post => API.postPost(post)

  render() {
    let { categories } = this.props

    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" />
          <input type="text" placeholder="Author" name="author" />
          <select name="category">
            <option>Select category</option>
            {categories.map(category => (
              <option key={category.path} value={category.path}>
                {category.name}
              </option>
            ))}
          </select>
          <Textarea placeholder="body" rows={10} name="body" />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

Create.propTypes = { categories: PropTypes.array.isRequired }

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(Create)
