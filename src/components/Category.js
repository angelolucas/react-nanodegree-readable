import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'

class Category extends Component {
  render() {
    const categoryPosts = this.props.posts.filter(
      post => post.category === this.props.path
    )

    return (
      <div>
        <h1>{this.props.name}</h1>
        <Posts posts={categoryPosts} />
      </div>
    )
  }
}

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Category)
