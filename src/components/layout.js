/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import MenuBar from "./menubar"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        bg: file(relativePath: { eq: "bg-overlay.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div
        className="container"
        style={{
          background: `url(${data.bg.childImageSharp.fluid.src})`,
          backgroundSize: "unset",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <MenuBar />

        <main>{children}</main>
        <div className="footer">
          <p>♥ from the Yeoman team</p>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
