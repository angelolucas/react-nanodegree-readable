import * as API from '../API'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

// TODO: Try to reduce to one actions for both posts and categories
export const fetchPosts = () => dispatch => (
  API.getPosts().then(posts => dispatch(receivePosts(posts)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchCategories = () => dispatch => (
  API.getCategories().then(categories => dispatch(receiveCategories(categories)))
)

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})
