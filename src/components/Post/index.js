import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Content from './Content'
import Comments from './Comments'
import CreateComment from './CreateComment'
import { storePost } from '../../actions/posts'

class Post extends Component {
  UNSAFE_componentWillMount() {
    const { match, posts, dispatch } = this.props
    const id = match.params.post

    /**
     * Check if the post is already in the store
     * Users coming from home already have all posts stored
     */
    if (!posts) dispatch(storePost(id))
  }

  render() {
    const { post } = this.props

    return (
      <div className={css(styles.post)}>
        {post && (
          <div>
            <Content {...post} />
            <Comments postID={post.id} />
            <CreateComment postID={post.id} />
          </div>
        )}
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object,
  posts: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }, props) => {
  const post = posts
    ? posts.find(post => post.id === props.match.params.post)
    : null

  return {
    post,
    posts,
  }
}

const styles = StyleSheet.create({ post: { maxWidth: 900 } })

export default connect(mapStateToProps)(Post)
