import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"
import { SRLWrapper } from "simple-react-lightbox"

const MyComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        projectImages: allFile(
          filter: { sourceInstanceName: { eq: "gallery" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SRLWrapper elements={data.projectImages.edges} />}
  />
)
export default MyComponent
