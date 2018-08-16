import * as API from '../API'

export const GET_POSTS = 'GET_POSTS'

export const getPosts = () => dispatch =>
  API.getPosts().then(posts =>
    dispatch({
      type: GET_POSTS,
      posts,
    })
  )
