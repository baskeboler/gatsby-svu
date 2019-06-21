import React from "react"
import styled, { css } from "styled-components"
const Overlay = styled.div`
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  left: 0;
  top: 0;
  background-origin: content-box;
  background-color: ${props =>
    props.color
      ? props.color
      : css`
    rgba(227, 6, 19, 0.5)`};
  height: 100%;
  width: 100%;
  z-index: 2;
  padding: 0;
`

export default props => (
  <div
    {...props}
    style={{ padding: 0, margin: 0, display: "block", position: "relative" }}
    className="overlay"
  >
    {[<Overlay />, ...props.children]}
  </div>
)
