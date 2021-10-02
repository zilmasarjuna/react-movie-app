import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectListData } from 'selectors/movie'

import { searchListMovie } from 'actions/movie'

export const useMovie = () => {
  const listMovie = useSelector(selectListData)

  const dispatch = useDispatch()

  const [data, changeData] = React.useState([])

  const handleSearch = (value) => {
    dispatch(searchListMovie({ s: value, page: 1}))
  }

  React.useEffect(() => {
    if (listMovie.type === 'SEARCH_MOVIE_REQUEST') {
      changeData([])
    } 

    if (listMovie.type === 'LIST_MOVIE_SUCCESS') {
      changeData(data.concat(listMovie.data))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listMovie])
  
  return {
    data,
    handleSearch,
    isFetching: listMovie.isFetching,
    page: listMovie.page,
    error: listMovie.error
  }
}