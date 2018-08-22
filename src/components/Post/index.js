import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Content from './Content'
import Comments from './Comments'
import CreateComment from './CreateComment'
import { storePosts } from '../../actions/posts'
import Loading from '../Loading'
import Failure from '../Failure'

class Post extends Component {
  UNSAFE_componentWillMount() {
    const { match, dispatch } = this.props
    const id = match.params.post

    dispatch(storePosts({ id }))
  }

  render() {
    const { posts, match } = this.props
    const post = posts.data.find(post => post.id === match.params.post)

    return (
      <div className={css(styles.post)}>
        {post && (
          <div>
            <Content {...post} history={this.props.history} />
            <Comments postID={post.id} />
            <CreateComment postID={post.id} />
          </div>
        )}

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error={posts.failure} />}
      </div>
    )
  }
}

Post.propTypes = {
  posts: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

const styles = StyleSheet.create({ post: { maxWidth: 900 } })

export default connect(mapStateToProps)(Post)
