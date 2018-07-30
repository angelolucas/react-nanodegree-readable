import * as API from '../API'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  API.getPosts().then(posts => dispatch(receivePosts(posts)))
)
