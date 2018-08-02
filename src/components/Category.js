import React, { Component } from 'react'
import Header from './Header'
import ListPosts from './ListPosts'
import Footer from './Footer'

class Category extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 style={{marginLeft: 40}}>{this.props.category}</h1>
        <ListPosts />
        <Footer />
      </div>
    )
  }
}

export default Category
