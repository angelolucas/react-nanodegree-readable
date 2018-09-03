import { CHANGE_SORT_BY } from '../actions/sortBy'

const defaultState = localStorage.sort ? localStorage.sort : 'date'

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SORT_BY:
      localStorage.sort = action.option
      return action.option

    default:
      return state
  }
}
