import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"
import { Row } from "react-bootstrap"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo-svu.png" }) {
          childImageSharp {
            fluid(
              fit: CONTAIN
              maxHeight: 150
              maxWidth: 200
              background: "transparent"
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="header d-none d-md-flex  d-flex-row justify-content-around align-items-center">
        {/* <Link to="/" className="header-brand my-4"> */}
        <Img
          fixed={data.file.childImageSharp.fluid}
          style={{ height: 150, width: 300 }}
        />
        {/* </Link> */}
        <div className="vertical-bar" />
        <h1 className="seguridad-integral">seguridad integral</h1>
      </div>
    )}
  />
)
