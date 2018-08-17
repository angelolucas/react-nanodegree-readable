import * as API from '../API'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY'

// Get all posts
export const getPosts = () => dispatch =>
  API.getPosts().then(posts =>
    dispatch({
      type: GET_POSTS,
      posts,
    })
  )

// Get posts by category
export const getPostsByCategory = category => dispatch =>
  API.getPostsByCategory(category).then(posts =>
    dispatch({
      type: GET_POSTS_BY_CATEGORY,
      category,
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
