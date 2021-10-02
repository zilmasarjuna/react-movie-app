import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectDetailData } from 'selectors/movie'

import { fetchDetailMovie } from 'actions/movie'

export const useMovie = (id) => {
  const detailMovie = useSelector(selectDetailData)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchDetailMovie(id))
  }, [id, dispatch])

  return {
    data: detailMovie.data,
    isFetching: detailMovie.isFetching,
  }
}