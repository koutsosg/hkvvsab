// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;

  display: inline-block;
  white-space: nowrap;

  transition: all 200ms ease-in;
  position: relative;
  font-size: 1rem;
  padding: 20px 5px;
  :hover {
    ::after {
      width: 100%;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.8rem;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/" className="aColor">
        Home
      </NavItem>
      <NavItem to="/lyrics" className="bColor">
        About
      </NavItem>
      <NavItem to="/colorings" className="cColor">
        Services
      </NavItem>
      <NavItem to="/about" className="dColor">
        Projects
      </NavItem>
      <NavItem to="/about" className="dColor">
        Contact
      </NavItem>
    </>
  )
}

export default NavbarLinks
