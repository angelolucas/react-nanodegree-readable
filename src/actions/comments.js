import * as API from '../API'

export const GET_COMMENTS = 'GET_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

// Get comments of current post
export const getComments = postId => dispatch =>
  API.getComments(postId).then(comments =>
    dispatch({
      type: GET_COMMENTS,
      comments,
    })
  )

// Delete
export const deleteComment = id => dispatch =>
  API.deleteComment(id).then(() =>
    dispatch({
      type: DELETE_COMMENT,
      id,
    })
  )

// Edit
export const editComment = (id, changes) => dispatch =>
  API.editComment(id, changes).then(() =>
    dispatch({
      type: EDIT_COMMENT,
      id,
      changes,
    })
  )
