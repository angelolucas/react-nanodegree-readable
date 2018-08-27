import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { storePosts } from '../actions/posts'
import PostCards from './PostCards'
import Loading from './Loading'
import Failure from './Failure'

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(storePosts())
  }

  render() {
    const { posts } = this.props
    const postsAsArray = Object.keys(posts.data).map(key => posts.data[key])

    return (
      <div>
        <PostCards posts={postsAsArray} />

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error={posts.failure} />}
      </div>
    )
  }
}

Home.propTypes = {
  posts: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Home)
