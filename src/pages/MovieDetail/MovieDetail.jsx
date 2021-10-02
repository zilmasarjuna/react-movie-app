import React from 'react'
import styled from 'styled-components'

import { Containers } from 'components/elements'

import DetailMovie from './components/DetailMovie'

const Detail = () => {
  return (
    <Wrapper>
      <Containers>
        <div className="title-page">
          <h2>Detail Movies</h2>
        </div>
        <div className="body-page">
          <DetailMovie  />
        </div>
      </Containers>
    </Wrapper>
  )
}

export default Detail

const Wrapper = styled.div`
  margin: 80px auto;
  position: relative;
`