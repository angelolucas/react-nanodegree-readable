import {
  STORE_POSTS,
  STORE_POSTS_BY_CATEGORY,
  STORE_POST,
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

    default:
      return state
  }
}
