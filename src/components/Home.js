import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { storePosts } from '../actions/posts'
import Posts from './Posts'
import sort from '../utils/sort'
import Loading from './Loading'
import Failure from './Failure'

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(storePosts())
  }

  render() {
    const { posts, sortBy } = this.props
    const postsAsArray = Object.keys(posts.data).map(key => posts.data[key])

    return (
      <div>
        <Posts posts={sort(postsAsArray, sortBy)} />

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error={posts.failure} />}
      </div>
    )
  }
}

Home.propTypes = {
  posts: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts, sortBy }) => ({
  posts,
  sortBy,
})

export default connect(mapStateToProps)(Home)
