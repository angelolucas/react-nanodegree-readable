import * as API from '../API'

export const STORE_CATEGORIES = 'STORE_CATEGORIES'

export const storeCategories = () => dispatch =>
  API.getCategories().then(categories =>
    dispatch({
      type: STORE_CATEGORIES,
      categories,
    })
  )
