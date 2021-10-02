import { combineReducers } from 'redux'

import movie_list from './movie/list'
import movie_detail from './movie/detail'

const rootReducer = combineReducers({
  movie_list,
  movie_detail
})

export default rootReducer