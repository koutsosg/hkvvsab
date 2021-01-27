import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"
const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        projectImages: allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox projectImages={data.projectImages.edges} />}
  />
)
export default Gallery
