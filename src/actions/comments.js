import * as API from '../API'

export const STORE_COMMENTS = 'STORE_COMMENTS'
export const POST_COMMENT = 'POST_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

// Store comments of current post
export const storeComments = postId => dispatch =>
  API.getComments(postId).then(comments =>
    dispatch({
      type: STORE_COMMENTS,
      comments,
    })
  )

export const postComment = comment => dispatch =>
  API.postComment(comment).then(comment =>
    dispatch({
      type: POST_COMMENT,
      comment,
    })
  )

export const deleteComment = id => dispatch =>
  API.deleteComment(id).then(() =>
    dispatch({
      type: DELETE_COMMENT,
      id,
    })
  )

export const editComment = (id, changes) => dispatch =>
  API.editComment(id, changes).then(() =>
    dispatch({
      type: EDIT_COMMENT,
      id,
      changes,
    })
  )

export const voteComment = (id, vote) => dispatch =>
  API.vote(id, 'comments', vote).then(() =>
    dispatch({
      type: VOTE_COMMENT,
      id,
      vote,
    })
  )
