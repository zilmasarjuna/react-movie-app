// Memoizing redux
import { createSelector } from 'reselect'

export const selectListData = createSelector(
  state => state.movie_list,
  list => list,
)


export const selectDetailData = createSelector(
  state => state.movie_detail,
  detail => detail
)