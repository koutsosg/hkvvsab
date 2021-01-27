import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
/* import "@reach/dialog/styles.css" */
import "./lightbox.css"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  @media (max-width: 610px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
  @media (max-width: 410px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`
export default class Lightbox extends Component {
  static propTypes = {
    projectImages: PropTypes.array.isRequired, // eslint-disable-line
  }
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }
  render() {
    const { projectImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <LightboxContainer>
          {projectImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <div className="zoom2">
                <Img
                  className="zoom"
                  fluid={image.node.childImageSharp.fluid}
                />
              </div>
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
