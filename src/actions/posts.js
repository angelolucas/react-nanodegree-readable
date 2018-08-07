import * as API from '../API'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const fetchPosts = () => dispatch => (
  API.getPosts().then(posts => dispatch(receivePosts(posts)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})
