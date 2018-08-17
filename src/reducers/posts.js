import { GET_POSTS, GET_POSTS_BY_CATEGORY, GET_POST } from '../actions/posts'

const defaultState = null

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts

    case GET_POSTS_BY_CATEGORY:
      if (state)
        return [
          ...state.filter(post => post.category !== action.category),
          ...action.posts,
        ]
      else return action.posts

    case GET_POST: {
      if (state)
        return [...state.filter(post => post.id !== action.id), action.post]
      else return [action.post]
    }
    default:
      return state
  }
}
