import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
/* import "@reach/dialog/styles.css" */
import "./lightbox.css"

const LightboxContainer = styled.div``
const PreviewButton = styled.button`
  border: none;
  background: none;
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
        <div
          className="text-center"
          style={{
            margin: `0 auto`,
            maxWidth: 1400,
          }}
        >
          <h3 className="btwline">
            <span className="line"></span>
            OUR WORK
            <span className="line"></span>
          </h3>

          <h2>Our Latest Projects</h2>
          <p style={{ paddingBottom: `1.75em` }}>
            We offer a wide range of plumbing services catered to both
            residential and commercial clients. Even the all-powerful Pointing
            has no control about the blind texts.
          </p>
        </div>
        <LightboxContainer className="p-3 ">
          {projectImages.map(image => (
            <PreviewButton
              className="col-6 col-sm-4 col-md-2 col-lg-2"
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
          <Dialog
            style={{
              margin: `300 auto`,
              maxWidth: 300,
              maxHeight: 300,
            }}
          >
            <Img
              style={{
                maxWidth: `100%`,
                height: `auto`,
              }}
              fluid={selectedImage.node.childImageSharp.fluid}
            />
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
