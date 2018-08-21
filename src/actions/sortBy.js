export const SORT_BY = 'SORT_BY'

export const sortBy = option => dispatch =>
  dispatch({
    type: SORT_BY,
    option,
  })
