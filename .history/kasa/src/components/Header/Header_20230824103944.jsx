import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ff6060;
  font-weight: 700;
  gap: 2rem;
`
const Logo = styled.img`
  height: 50px;
`
const
function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
    </HeaderWrapper>
    <Navigation>
  )
}
export default Header
