export const CHANGE_SORT_BY = 'CHANGE_SORT_BY'

export const changeSortBy = option => dispatch =>
  dispatch({
    type: CHANGE_SORT_BY,
    option,
  })
