/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BgImg from "gatsby-background-image"
import Header from "./header"
import "./layout.scss"
import MenuBar from "./menubar"
import { Container, Row, Col } from "react-bootstrap"
import { Footer } from "./footer"
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
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BgImg fluid={data.bg.childImageSharp.fluid}>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Row>
            <MenuBar />
          </Row>
          <Row>
            <Col>
              <main>{children}</main>
            </Col>
          </Row>
          <Footer />
        </Container>
      </BgImg>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
