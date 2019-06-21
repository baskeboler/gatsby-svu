import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const CenteredOnTop = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  z-index: 2;
  opacity: 0.7;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`

export const Icon = props => (
  <CenteredOnTop>
    <Img {...props} />
  </CenteredOnTop>
)
Icon.propTypes = Img.propTypes

export const PlayIcon = props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "play-icon.png" }) {
          childImageSharp {
            fixed(width: 128, height: 128, background: "transparent") {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Icon fixed={data.file.childImageSharp.fixed} />}
  />
)
