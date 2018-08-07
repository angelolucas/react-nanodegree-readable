import { RECEIVE_CATEGORIES } from '../actions/categories'

const defaultState = null

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
