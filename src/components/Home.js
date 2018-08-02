import React, { Component } from 'react'
import Header from './Header'
import ListPosts from './ListPosts'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListPosts />
        <Footer />
      </div>
    )
  }
}

export default Home
