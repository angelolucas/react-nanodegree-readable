import {
  STORE_POSTS,
  STORE_POSTS_BY_CATEGORY,
  STORE_POST,
  DELETE_POST,
} from '../actions/posts'

const defaultState = null

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case STORE_POSTS:
      return action.posts

    case STORE_POSTS_BY_CATEGORY:
      return action.posts

    case STORE_POST:
      return [action.post]

    case DELETE_POST:
      return state.filter(post => post.id !== action.id)

    default:
      return state
  }
}
