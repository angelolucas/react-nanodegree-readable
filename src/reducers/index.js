import { RECEIVE_POSTS, RECEIVE_CATEGORIES } from '../actions'

const defaultState = {
  posts: null,
  categories: null,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}
