import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo-svu.png" }) {
          childImageSharp {
            fluid(maxWidth: 336) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="header d-flex d-flex-row align-items-center justify-content-between">
        <Link to="/" className="header-brand my-4">
          <Img
            style={{ height: 180 }}
            fluid={data.file.childImageSharp.fluid}
          />
        </Link>
        <div className="vertical-bar" />
        <h1 className="seguridad-integral">seguridad integral</h1>
      </div>
    )}
  />
)
