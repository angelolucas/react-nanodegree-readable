import { SORT_BY } from '../actions/sortBy'

const defaultState = 'date'

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SORT_BY:
      return action.option

    default:
      return state
  }
}
