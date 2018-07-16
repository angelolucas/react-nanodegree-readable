import React, { Component } from 'react'
import Header from './Header'
import ListPosts from '../ListPosts'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListPosts />
      </div>
    )
  }
}

export default Home
