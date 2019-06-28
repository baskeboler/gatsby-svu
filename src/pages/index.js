import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import BgImg from "gatsby-background-image"
import SEO from "../components/seo"
import Overlay from "../components/overlay"
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap"
import { PlayIcon } from "../components/icon"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col xs={12}>
        <Carousel slide fade wrap>
          <CarouselItem>
            <Img
              style={{ height: "70vh" }}
              fluid={data.carousel1.childImageSharp.fluid}
            />
          </CarouselItem>
          <CarouselItem>
            <Img
              style={{ height: "70vh" }}
              fluid={data.carousel2.childImageSharp.fluid}
            />
          </CarouselItem>
        </Carousel>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col xs={6} className="m-0">
        <Overlay>
          <BgImg
            style={{ width: "100%", height: "40vh" }}
            fluid={data.rastreo.childImageSharp.fluid}
          />
          <PlayIcon />
        </Overlay>
      </Col>
      <Col xs={6} className="m-0">
        <Overlay color="blue">
          <BgImg
            style={{ width: "100%", height: "40vh" }}
            fluid={data.videoverificacion.childImageSharp.fluid}
          />
          <PlayIcon />
        </Overlay>
      </Col>
    </Row>
    <Row className="bienvenidos">
      <Col xs={12}>
        <h1>BIENVENIDOS!</h1>
        <p>
          Con más de 25 años de historia, SVU es una empresa Uruguaya atendida
          por sus propios dueños. Trabajamos bajo estrictos parámetros de
          excelencia apostando por la innovación, basamos nuestro trabajo en una
          estrategia de negocio claramente diferenciada por la cercanía al
          Cliente
        </p>
      </Col>
    </Row>
  </Layout>
)

export const query = graphql`
  query {
    carousel1: file(relativePath: { eq: "carousel1.jpg" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carousel2: file(relativePath: { eq: "carousel2.jpg" }) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg: file(relativePath: { eq: "bg-overlay.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rastreo: file(relativePath: { eq: "imagenrastreo.jpg" }) {
      childImageSharp {
        fixed(fit: COVER, height: 330) {
          ...GatsbyImageSharpFixed
        }
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videoverificacion: file(relativePath: { eq: "imagenvideoverific.jpg" }) {
      childImageSharp {
        fixed(fit: COVER, height: 330) {
          ...GatsbyImageSharpFixed
        }
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
