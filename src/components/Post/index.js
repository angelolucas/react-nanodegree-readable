import React, { Component } from 'react'
import Header from '../Header'
import Detail from './Detail'
import Comments from './Comments'
import Footer from '../Footer'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div>
        <Header />
        <Detail post={post} />
        <Comments />
        <Footer />
      </div>
    )
  }
}

export default Post
