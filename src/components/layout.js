/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "typeface-ultra";
import "typeface-open-sans";
import "./sass/index.scss"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  let containerClass;
  if (props.showHeader) {
    containerClass = "container";
  } else {
    containerClass = "splash-container";
  }

  return (
    <div className={containerClass}>
      {props.showHeader && 
        <Header siteTitle={data.site.siteMetadata.title} reset={props.reset} />
      }
      {props.children}
      {props.showHeader &&
        <footer className={props.isLastContent ? "stick" : null}>
          <div className="footer-left">
            <p>Inspired by a text from <a href="http://www.rossiestearns.com/" target="_blank" rel="noopener noreferrer">Rossie Stearns</a></p>
            <p>Built by <a href="https://levibrooke.com" target="_blank" rel="noopener noreferrer">Levi Porter</a> on a Sunday</p>
          </div>
          <div className="footer-right">
            <p>Want to submit content? <a href="mailto:levi@levibrooke.com" target="_blank">Email me</a></p>
          </div>
        </footer>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
