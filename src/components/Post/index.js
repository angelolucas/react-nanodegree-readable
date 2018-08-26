import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { storePosts } from '../../actions/posts'
import Comments from '../Comments'
import CreateComment from '../CreateComment'
import Loading from '../Loading'
import Failure from '../Failure'
import Header from './Header'
import View from './View'
import Edit from './Edit'

class Post extends Component {
  state = { editMode: false }

  editMode = (bool = true) => {
    if (bool) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  UNSAFE_componentWillMount() {
    const { match, storePosts } = this.props
    const id = match.params.post

    storePosts({ id })
  }

  render() {
    const { editMode } = this.state
    const { posts, match } = this.props
    const post = posts.data[match.params.post]

    return (
      <div className={css(styles.post)}>
        {post && (
          <div>
            <Header {...post} />
            {editMode ? (
              <Edit
                {...post}
                editMode={this.editMode}
                history={this.props.history}
              />
            ) : (
              <View {...post} editMode={this.editMode} />
            )}
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
  storePosts: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => {
  return { storePosts: data => dispatch(storePosts(data)) }
}

const styles = StyleSheet.create({ post: { maxWidth: 900 } })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
