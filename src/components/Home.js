import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import ListPosts from './ListPosts'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListPosts posts={this.props.posts} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Home)
