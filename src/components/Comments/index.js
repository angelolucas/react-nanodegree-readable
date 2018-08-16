import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { spaces } from '../../theme'
import { getComments } from '../../actions/comments'

class Comments extends Component {
  state = { comments: null }

  UNSAFE_componentWillMount() {
    this.getComments()
  }

  getComments = () => {
    this.props.dispatch(getComments(this.props.postID))
  }

  render() {
    const { comments, postID } = this.props

    const title =
      comments && comments.length > 0
        ? `${comments.length} Comment(s)`
        : `No Comments`

    return (
      <div>
        <h3 className={css(styles.title)}>{title}</h3>
        {comments &&
          comments.map(comment => <Comment {...comment} key={comment.id} />)}
        <CommentForm postID={postID} />
      </div>
    )
  }
}

Comments.propTypes = {
  postID: PropTypes.string.isRequired,
  comments: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ comments }) => ({ comments })

const styles = StyleSheet.create({ title: { marginBottom: spaces.x2 } })

export default connect(mapStateToProps)(Comments)
