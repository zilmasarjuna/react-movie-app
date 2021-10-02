/* eslint-disable */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'

import { List, Image } from 'antd'
import { Link } from "react-router-dom"

import { useMovie } from "../hooks"

import { fetchListMovie } from 'actions/movie'


const ListMovie = () => {
  const { data, isFetching, page, error } = useMovie()
  const dispatch = useDispatch()

  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.scrollHeight
      ) {
        dispatch(fetchListMovie({ page: page + 1}))
      }
    }
  }, [page])

  return (
    <div 
      className="wrap-item"
    >
      {
        error && !isFetching && <ErrorMessage>{error}</ErrorMessage>
      }
      {!error && <List 
        itemLayout="vertical"
        size="large"
        loading={isFetching}
        dataSource={data}
        rowKey="imdbID"
        renderItem={(item) => (
          <List.Item key={item.imdbID}>
            <List.Item.Meta
              avatar={
                <Image src={item.Poster} className="img-list"/>
              }
              title={<Link to={`/movie/${item.imdbID}`}>{item.Title}</Link>}
              description={item.Year}
            />
          </List.Item>
        )}
      />}
    </div>
  )
}

export default ListMovie

const ErrorMessage = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: red;
`