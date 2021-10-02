import React from 'react'
import styled from 'styled-components'

import { Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', top: 0 }}>
      <Logo>
        <Link to="/">Search Movie</Link>
      </Logo>
    </Header>
  )
}

export default HeaderComponent

const Logo = styled.div`
  a {
    color: #fff
  }
`