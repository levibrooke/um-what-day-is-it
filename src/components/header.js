import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, reset }) => (
  <header>
    <button onClick={reset}>{siteTitle}</button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
