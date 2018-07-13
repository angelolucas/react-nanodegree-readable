import React, { Component } from 'react'
import ListPosts from '../ListPosts'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Readable</h1>
        <h5>Wednesday, July 11, 2018</h5>
        <ListPosts />
      </div>
    )
  }
}

export default Home
