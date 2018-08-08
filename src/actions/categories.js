import * as API from '../API'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const fetchCategories = () => dispatch =>
  API.getCategories().then(categories =>
    dispatch(receiveCategories(categories))
  )

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
})
