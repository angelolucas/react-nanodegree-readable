import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import serializeForm from 'form-serialize'
import uuid from 'uuid'
import { buttons } from '../theme'
import * as API from '../API'
import { storePosts } from '../actions/posts'
import { Columns, MainColumn, SideColumn } from './Grid/TwoColumns'
import Navigation from './Navigation'
import { InputTitle, InputSummary, InputBody } from './inputs'

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
      .then(() => this.goToPostPage(post))
  }

  goToPostPage = post => {
    const postPath = `/${post.category}/${post.id}`

    this.props.history.push(postPath)
  }

  render() {
    let { categories } = this.props

    return (
      <div>
        <Navigation />
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <Columns>
            <MainColumn>
              <InputTitle />
              <InputSummary minRows={2} />
              <InputBody minRows={10} />
            </MainColumn>
            <SideColumn>
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
              <button className={css(styles.submit)}>Save</button>
            </SideColumn>
          </Columns>
        </form>
      </div>
    )
  }
}

Create.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  submit: {
    ...buttons.default,
    float: 'right',
  },
})

export default connect(mapStateToProps)(Create)
