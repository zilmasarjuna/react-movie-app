import movie_host from 'services/movie_host'

import {
  LIST_MOVIE_FAILURE,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  SEARCH_MOVIE_REQUEST,
  DETAIL_MOVIE_FAILURE,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from 'constants/types'

export const listMovieRequest = () => ({
  type: LIST_MOVIE_REQUEST,
})

export const searchMovieRequest = () => ({
  type: SEARCH_MOVIE_REQUEST,
})


export const listMovieSuccess = (data, page) => ({
  type: LIST_MOVIE_SUCCESS,
  data,
  page
})

export const listMovieFailure = error => ({
  type: LIST_MOVIE_FAILURE,
  error,
})

export const detailMovieRequest = () => ({
  type:DETAIL_MOVIE_REQUEST,
})

export const detailMovieSuccess = (data) => ({
  type:DETAIL_MOVIE_SUCCESS,
  data,
})

export const detailMovieFailure = error => ({
  type:DETAIL_MOVIE_FAILURE,
  error,
})

export const fetchListMovie = ({ s = 'Batman', page = 1 } = {}) => {
  return (dispatch) => {
    dispatch(listMovieRequest())
    return movie_host.get(`/?apikey=aed66ff4&s=${s}&page=${page}`).then(res => {
      if (res.data.Response === 'True') {
        dispatch(listMovieSuccess(res.data.Search, page))
      } else {
        dispatch(listMovieFailure(res.data.Error))  
      }
    }).catch(err => {
      dispatch(listMovieFailure(err))
    })
  }
}

export const searchListMovie = ({ s = 'Batman' }) => {
  return (dispatch) => {
    dispatch(searchMovieRequest())
    return movie_host.get(`/?apikey=aed66ff4&s=${s}&page=1`).then(res => {
      if (res.data.Response === 'True') {
        dispatch(listMovieSuccess(res.data.Search, 1))
      } else {
        dispatch(listMovieFailure(res.data.Error))  
      }
    }).catch(err => {
      dispatch(listMovieFailure(err))
    })
  }
}

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(detailMovieRequest())
    return movie_host.get(`/?apikey=aed66ff4&i=${id}`).then(res => {
      if (res.data) {
        dispatch(detailMovieSuccess(res.data))
      }
    }).catch(err => {
      dispatch(detailMovieFailure(err))
    })
  }
}

