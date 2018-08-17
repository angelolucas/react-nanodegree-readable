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
      if (state)
        return [
          ...state.filter(post => post.category !== action.category),
          ...action.posts,
        ]
      else return action.posts

    case STORE_POST: {
      if (state)
        return [...state.filter(post => post.id !== action.id), action.post]
      else return [action.post]
    }
    default:
      return state
  }
}
