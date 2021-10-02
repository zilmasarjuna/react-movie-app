import {
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILURE,
} from 'constants/types'

const initialState = {
  isFetching: false,
  data: {},
  error: null
}

export default function movie_detail(state = initialState, action) {
  switch(action.type) {
    case DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: {},
      }
    case DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
      }
    case DETAIL_MOVIE_FAILURE: 
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: action.error,
      }
    default:
      return state
  }
}