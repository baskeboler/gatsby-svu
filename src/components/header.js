import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo-svu.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className="header d-flex d-flex-row justify-content-around align-items-center">
        {/* <Link to="/" className="header-brand my-4"> */}
        <Img fixed={data.file.childImageSharp.fixed} />
        {/* </Link> */}
        <div className="vertical-bar" />
        <h1 className="seguridad-integral">seguridad integral</h1>
      </div>
    )}
  />
)
