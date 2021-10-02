import React from 'react'
import styled from 'styled-components'
import { useMovie } from "../hooks"

import { debounceFunction } from 'utils/core';


const SearchList = () => {
  const { handleSearch } = useMovie()
  return (
    <Input
      type="text" 
      placeholder="Search movie"
      onChange={(e) => {
        debounceFunction(() => {
          handleSearch(e.target.value)
        }, 1000)
      }}
    />
  )
}

export default SearchList

const Input = styled.input`
  width: 100%;
  border: unset;
  border-bottom: 1px solid #eee;
  text-align: center;
  outline: 0;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
` 