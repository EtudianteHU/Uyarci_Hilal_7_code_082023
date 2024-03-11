import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #ff6060;
  font-weight: 700;
`
const Logo = styled.img`
  height: 50px;
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  color: #ff6060;
  font-weight: 700;
  gap: 2rem;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ff6060;
  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
      <Navigation>
        <StyledLink exact to="/" activeClassName="active">
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1" activeClassName="active">
          A propos
        </StyledLink>
      </Navigation>
    </HeaderWrapper>
  )
}
export default Header
