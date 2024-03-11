import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import colors from '../../utils/style/colors'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${colors.primary};
  font-weight: 700;
  gap: 2rem;
`

const Logo = styled.img`
  height: 80px;
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  color: ${colors.primary};
  font-weight: 700;
  gap: 2rem;
  margin-left: auto;
  @media screen and (width<=768px) {
    text-transform: uppercase;
    font-weight: 400;
  }
`
}
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
      <Navigation />
    </HeaderWrapper>
  )
}
export default Header
