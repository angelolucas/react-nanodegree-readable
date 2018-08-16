import { GET_POSTS } from '../actions/posts'

const defaultState = null

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    default:
      return state
  }
}
