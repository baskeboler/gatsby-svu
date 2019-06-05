import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Carousel, CarouselItem } from "react-bootstrap"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Carousel slide fade wrap>
      <CarouselItem>
        <Img fluid={data.carousel1.childImageSharp.fluid} />
      </CarouselItem>
      <CarouselItem>
        <Img fluid={data.carousel2.childImageSharp.fluid} />
      </CarouselItem>
    </Carousel>
  </Layout>
)

export const query = graphql`
  query {
    carousel1: file(relativePath: { eq: "carousel1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carousel2: file(relativePath: { eq: "carousel2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
