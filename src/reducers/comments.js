import {
  STORE_COMMENTS,
  POST_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from '../actions/comments'

const defaultState = null

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case STORE_COMMENTS:
      return action.comments

    case POST_COMMENT:
      return [...state, action.comment]

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id)
          comment = {
            ...comment,
            ...action.changes,
          }

        return comment
      })

    default:
      return state
  }
}
