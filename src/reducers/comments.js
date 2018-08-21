import {
  STORE_COMMENTS,
  POST_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
} from '../actions/comments'

const defaultState = []

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

    case VOTE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          if (action.vote === 'upVote') comment.voteScore += 1
          else if (action.vote === 'downVote') comment.voteScore -= 1
        }

        return comment
      })

    default:
      return state
  }
}
