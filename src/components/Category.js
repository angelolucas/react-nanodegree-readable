import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ListPosts from './ListPosts'
import Footer from './Footer'

class Category extends Component {
  render() {
    const categoryPosts = this.props.posts.filter(
      post => post.category === this.props.category
    )

    return (
      <div>
        <Header />
        <h1 style={{marginLeft: 40}}>{this.props.category}</h1>
        <ListPosts posts={categoryPosts} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Category)
