import * as API from '../API'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'

// Get all posts
export const getPosts = () => dispatch =>
  API.getPosts().then(posts =>
    dispatch({
      type: GET_POSTS,
      posts,
    })
  )

// Get single post
export const getPost = id => dispatch =>
  API.getPost(id).then(post =>
    dispatch({
      type: GET_POST,
      post,
    })
  )
