import {
  POSTS_FETCHING,
  POSTS_SUCCESS,
  POSTS_FAILURE,
  STORE_POST,
  VOTE_POST,
  EDIT_POST,
} from '../actions/posts'

const defaultState = {
  data: [],
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

    case POSTS_FAILURE:
      return {
        ...defaultState,
        failure: action.failure,
      }

    case POSTS_SUCCESS:
      return {
        ...defaultState,
        data: action.posts,
      }

    case STORE_POST:
      return {
        ...defaultState,
        data: action.post,
      }

    case VOTE_POST:
      return {
        ...state,
        data: state.data.map(post => {
          if (post.id === action.id) {
            if (action.vote === 'upVote') post.voteScore += 1
            else if (action.vote === 'downVote') post.voteScore -= 1
          }

          return post
        }),
      }

    case EDIT_POST:
      return {
        ...state,
        data: state.data.map(post => {
          if (post.id === action.id)
            post = {
              ...post,
              ...action.changes,
            }

          return post
        }),
      }

    default:
      return state
  }
}
