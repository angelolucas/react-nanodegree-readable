import * as API from '../API'

export const FETCHING_POSTS = 'FETCHING_POSTS'
export const STORE_POSTS = 'STORE_POSTS'
export const POSTS_FAILURE = 'POSTS_FAILURE'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

/**
 * `type` parameter can be a category: {category: 'redux'}
 * or a single post: {id: '123acb'}
 * or all posts: empty
 */
export const storePosts = type => dispatch => {
  dispatch({
    type: FETCHING_POSTS,
    fetching: true,
  })

  API.getPosts(type)
    .then(data => {
      if (Object.keys(data).length) {
        dispatch({
          type: STORE_POSTS,
          data,
        })
      } else {
        dispatch({
          type: POSTS_FAILURE,
          failure: 'no posts',
        })
      }
    })
    .catch(() =>
      dispatch({
        type: POSTS_FAILURE,
        failure: 'no conection',
      })
    )
}

export const votePost = (id, changes, choice) => dispatch =>
  API.vote(id, 'posts', choice).then(() =>
    dispatch({
      type: EDIT_POST,
      id,
      changes,
    })
  )

export const editPost = (id, changes) => dispatch =>
  API.editPost(id, changes).then(() =>
    dispatch({
      type: EDIT_POST,
      id,
      changes,
    })
  )

export const deletePost = id => dispatch =>
  API.deletePost(id).then(() =>
    dispatch({
      type: DELETE_POST,
      id,
    })
  )
