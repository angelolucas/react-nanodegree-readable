import {
  FETCHING_POSTS,
  STORE_POSTS,
  POSTS_FAILURE,
  EDIT_POST,
} from '../actions/posts'

const defaultState = {
  data: {},
  fetching: false,
  failure: false,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        fetching: true,
        failure: false,
      }

    case STORE_POSTS:
      return {
        data: {
          ...state.data,
          ...action.data,
        },
        fetching: false,
        failure: false,
      }

    case POSTS_FAILURE:
      return {
        ...state,
        fetching: false,
        failure: action.failure,
      }

    case EDIT_POST:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: {
            ...state.data[action.id],
            ...action.changes,
          },
        },
      }

    default:
      return state
  }
}
