import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import { storeComments } from '../../actions/comments'
import sort from '../../utils/sort'
import Comment from './Comment'

class Comments extends Component {
  state = { comments: null }

  UNSAFE_componentWillMount() {
    this.props.dispatch(storeComments(this.props.postID))
  }

  render() {
    const { comments, sortBy } = this.props

    const title =
      comments.length > 0 ? `${comments.length} Comment(s)` : `No Comments`

    return (
      <div>
        <h3 className={css(styles.title)}>{title}</h3>
        {sort(comments, sortBy).map(comment => (
          <Comment {...comment} key={comment.id} />
        ))}
      </div>
    )
  }
}

Comments.propTypes = {
  postID: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
}

const mapStateToProps = ({ comments, sortBy }) => ({
  comments,
  sortBy,
})

const styles = StyleSheet.create({ title: { marginBottom: spaces.x2 } })

export default connect(mapStateToProps)(Comments)
