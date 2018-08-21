import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { storePosts } from '../actions/posts'
import Posts from './Posts'
import sort from '../utils/sort'

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(storePosts())
  }

  render() {
    const { posts, sortBy } = this.props

    return <Posts posts={sort(posts, sortBy)} />
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts, sortBy }) => ({
  posts,
  sortBy,
})

export default connect(mapStateToProps)(Home)
