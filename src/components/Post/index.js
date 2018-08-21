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
    const { match, dispatch } = this.props
    const id = match.params.post

    dispatch(storePost(id))
  }

  render() {
    const { post } = this.props

    return (
      <div className={css(styles.post)}>
        {post && (
          <div>
            <Content {...post} history={this.props.history} />
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
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }, props) => {
  const post = posts.find(post => post.id === props.match.params.post)

  return {
    posts,
    post,
  }
}

const styles = StyleSheet.create({ post: { maxWidth: 900 } })

export default connect(mapStateToProps)(Post)
