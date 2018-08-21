import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import sortBy from './sortBy'

export default combineReducers({
  categories,
  posts,
  comments,
  sortBy,
})
