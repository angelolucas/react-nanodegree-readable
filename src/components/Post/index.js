import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as API from '../../API'
import Header from '../Header'
import Detail from './Detail'
import Comments from './Comments'
import Footer from '../Footer'

class Post extends Component {
  state = { comments: null }

  componentWillMount() {
    API.getComments(this.props.post.id)
      .then(comments => this.setState({ comments }))
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <Header />
        <Detail post={post} />
        <Comments comments={this.state.comments} />
        <Footer />
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
