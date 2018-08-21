import { STORE_CATEGORIES } from '../actions/categories'

const defaultState = []

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case STORE_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
