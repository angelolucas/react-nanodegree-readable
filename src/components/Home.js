import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from './Header'
import Posts from './Posts'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Posts posts={this.props.posts} />
        <Footer />
      </div>
    )
  }
}

Home.propTypes = { posts: PropTypes.array.isRequired }

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Home)
