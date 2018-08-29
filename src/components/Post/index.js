import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { storePosts } from '../../actions/posts'
import { Columns, MainColumn, SideColumn } from '../Grid/TwoColumns'
import Comments from '../Comments'
import CreateComment from '../CreateComment'
import Loading from '../Loading'
import Failure from '../Failure'
import Navigation from '../Navigation'
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
    const { match, storePosts } = this.props
    const id = match.params.post

    storePosts({ id })
  }

  render() {
    const { editMode } = this.state
    const { posts, match } = this.props
    const post = posts.data[match.params.post]

    return (
      <div>
        <Navigation />

        {post && (
          <Columns>
            <MainColumn>
              <Header {...post} />
              {editMode ? (
                <Edit
                  {...post}
                  toggleEditMode={this.toggleEditMode}
                  history={this.props.history}
                />
              ) : (
                <View {...post} toggleEditMode={this.toggleEditMode} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
