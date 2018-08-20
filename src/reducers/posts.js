import {
  STORE_POSTS,
  STORE_POSTS_BY_CATEGORY,
  STORE_POST,
  VOTE_POST,
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

    case VOTE_POST:
      return state.map(post => {
        if (post.id === action.id) {
          if (action.vote === 'upVote') post.voteScore += 1
          else if (action.vote === 'downVote') post.voteScore -= 1
        }

        return post
      })

    default:
      return state
  }
}
