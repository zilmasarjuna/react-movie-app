import React from 'react'
import styled from 'styled-components'

import { Col, Row } from 'antd'
import { Containers } from 'components/elements'

import SearchList from './components/SearchList'
import ListMovie from './components/ListMovie'

const MovieList = () => {
  return (
    <Wrapper>
      <Containers>
        <div className="body-page">
          <Row>
            <Col md={24}>
              <SearchList />
            </Col>
            <Col md={24}>
              <ListMovie />
            </Col>
          </Row>
        </div>
      </Containers>
    </Wrapper>
  )
}

export default MovieList

const Wrapper = styled.div`
  margin: 80px auto;
  position: relative;
`