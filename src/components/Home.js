import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { storePosts } from '../actions/posts'
import Posts from './Posts'

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(storePosts())
  }
  render() {
    return <Posts posts={this.props.posts} />
  }
}

Home.propTypes = {
  posts: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Home)
