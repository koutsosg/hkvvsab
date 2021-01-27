import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar/Navbar"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#454545`,
      zIndex: `1`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,

        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
