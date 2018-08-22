import * as API from '../API'

export const POSTS_FETCHING = 'POSTS_FETCHING'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'
export const STORE_POST = 'STORE_POST'
export const VOTE_POST = 'VOTE_POST'
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
      if (posts.length > 0) {
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

export const votePost = (id, vote) => dispatch =>
  API.vote(id, 'posts', vote).then(() =>
    dispatch({
      type: VOTE_POST,
      id,
      vote,
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
