import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
} from 'constants/types'

const initialState = {
  isFetching: false,
  data: [],
  error: null,
  page: 1,
  length: 0,
  type: LIST_MOVIE_REQUEST
}

export default function movie_list(state = initialState, action) {
  switch(action.type) {
    case LIST_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: [],
        length: 0,
        type: LIST_MOVIE_REQUEST
      }
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: [],
        length: 0,
        type: SEARCH_MOVIE_REQUEST
      }
    case LIST_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        length: action.data.length,
        page: action.page,
        type: LIST_MOVIE_SUCCESS
      }
    case LIST_MOVIE_FAILURE: 
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: action.error,
        page: 1,
        length: 0,
        type: LIST_MOVIE_FAILURE
      }
    default:
      return state
  }
}