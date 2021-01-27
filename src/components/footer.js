import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Social from "./social"
const Footer = () => (
  <footer
    className=""
    style={{
      background: `#454545`,

      color: `white`,
      textDecoration: `none`,

      margin: `0 auto`,

      padding: `1.45rem 1.0875rem`,
    }}
  >
    <div className="row " style={{ margin: `0 auto`, maxWidth: 1400 }}>
      <div style={{}} className="text-center col-lg-6 col-md-6 col-sm-12">
        © {new Date().getFullYear()},
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          &nbsp;Hylén & Kjellander VVS AB
        </Link>
        .&nbsp;All Rights Reserved
      </div>
      <div
        style={{
          display: `flex`,

          justifyContent: `flexEnd`,
        }}
        className="col-lg-6 col-md-6 col-sm-12 justify-content-end d-flex"
      >
        <Social className="" />
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
