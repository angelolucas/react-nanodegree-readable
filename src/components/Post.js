import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Post extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 style={{marginLeft: 40}}>{this.props.post.title}</h1>
        <Footer />
      </div>
    )
  }
}

export default Post
