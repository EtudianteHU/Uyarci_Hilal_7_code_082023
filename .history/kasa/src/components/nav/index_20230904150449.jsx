import React from "react"
import styled from "styled-components"
import colors from '../../utils/style/colors'

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
`
const NavLink = styled.a`
position: relative;
color: ${colors.primary};
text-decoration: none;
&.before,
&.after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
}
`


const Navigation = () => {
    return (
        <Nav>
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/about">A propos</NavLink>
        </Nav>
    )
}

export default Navigation