import {
  POSTS_FETCHING,
  POSTS_SUCCESS,
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
    case POSTS_FETCHING:
      return {
        ...state,
        fetching: true,
        failure: false,
      }

    case POSTS_SUCCESS:
      return {
        ...defaultState,
        data: action.data,
      }

    case POSTS_FAILURE:
      return {
        ...defaultState,
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
