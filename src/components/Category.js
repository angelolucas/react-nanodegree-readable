import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import Posts from './Posts'
import Footer from './Footer'

class Category extends Component {
  render() {
    const categoryPosts = this.props.posts.filter(post => post.category === this.props.path)

    return (
      <div>
        <Header />
        <h1 style={{ marginLeft: 40 }}>{this.props.name}</h1>
        <Posts posts={categoryPosts} />
        <Footer />
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
