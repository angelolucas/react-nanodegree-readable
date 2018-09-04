import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { storePosts } from '../../actions/posts'
import { Columns, MainColumn, SideColumn } from '../Grid/TwoColumns'
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

  toggleEditMode = (bool = true) => {
    if (bool) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  UNSAFE_componentWillMount() {
    const { match, storePosts, location } = this.props
    const id = match.params.post
    const mountInEditMode = location.state ? location.state.editMode : false

    storePosts({ id })

    if (mountInEditMode) this.setState({ editMode: true })
  }

  render() {
    const { editMode } = this.state
    const { posts, match } = this.props
    const post = posts.data[match.params.post]

    return (
      <div style={{ flex: 1 }}>
        {post && (
          <Columns>
            <MainColumn>
              <Header {...post} />
              {editMode ? (
                <Edit {...post} toggleEditMode={this.toggleEditMode} />
              ) : (
                <View
                  {...post}
                  toggleEditMode={this.toggleEditMode}
                  history={this.props.history}
                />
              )}
              <Comments postID={post.id} />
              <CreateComment postID={post.id} />
            </MainColumn>
            <SideColumn>
              <Sidebar category={post.category} id={post.id} />
            </SideColumn>
          </Columns>
        )}

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error="Post not found" />}
      </div>
    )
  }
}

Post.propTypes = {
  posts: PropTypes.object.isRequired,
  storePosts: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => {
  return { storePosts: data => dispatch(storePosts(data)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
