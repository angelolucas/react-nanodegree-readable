import * as API from '../API'

export const POSTS_FETCHING = 'POSTS_FETCHING'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'
export const EDIT_POST = 'EDIT_POST'

/**
 * `type` parameter can be a category: {category: 'redux'}
 * or a single post: {id: '123acb'}
 * or all posts: empty
 */
export const storePosts = type => dispatch => {
  dispatch({
    type: POSTS_FETCHING,
    fetching: true,
  })

  API.getPosts(type)
    .then(posts => {
      if (Object.keys(posts).length) {
        dispatch({
          type: POSTS_SUCCESS,
          posts,
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
