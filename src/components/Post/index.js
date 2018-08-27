import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { storePosts } from '../../actions/posts'
import { spaces, breakpoint } from '../../theme'
import Comments from '../Comments'
import CreateComment from '../CreateComment'
import Loading from '../Loading'
import Failure from '../Failure'
import Header from './Header'
import View from './View'
import Edit from './Edit'
import Sidebar from './Sidebar'

class Post extends Component {
  state = { editMode: false }

  switchEditMode = (bool = true) => {
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
            <div className={css(styles.columns)}>
              <div className={css(styles.main)}>
                {editMode ? (
                  <Edit
                    {...post}
                    switchEditMode={this.switchEditMode}
                    history={this.props.history}
                  />
                ) : (
                  <View {...post} switchEditMode={this.switchEditMode} />
                )}
                <Comments postID={post.id} />
                <CreateComment postID={post.id} />
              </div>
              <div className={css(styles.sidebar)}>
                <Sidebar category={post.category} id={post.id} />
              </div>
            </div>
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

const styles = StyleSheet.create({
  columns: {
    display: 'flex',
    width: '100%',
  },

  main: {
    flex: '70%',

    [breakpoint.medium]: { flex: '100%' },
  },

  sidebar: {
    marginLeft: spaces.x2,
    flex: '30%',
    position: 'relative',

    [breakpoint.medium]: { display: 'none' },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
