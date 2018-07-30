import { RECEIVE_POSTS } from '../actions'

const defaultState = {
  posts: null
}

export default function reducer(state = defaultState, action) {
  const posts = { action }

  switch (action.type) {
    case RECEIVE_POSTS:
      return { posts: action.posts }
    break
    default:
      return state
  }
}
