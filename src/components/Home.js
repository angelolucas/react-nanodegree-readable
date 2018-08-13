import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from './Posts'

class Home extends Component {
  render() {
    return <Posts posts={this.props.posts} />
  }
}

Home.propTypes = { posts: PropTypes.array.isRequired }

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Home)
