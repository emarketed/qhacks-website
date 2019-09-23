import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
const Header = ({ siteTitle }) => (
  
  <header>
    <div  class= "Rectangle-10">
    <div class= "text-about">
        
          About
        
        </div>
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
