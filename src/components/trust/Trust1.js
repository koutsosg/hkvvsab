import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ServiceImage = styled(Img)`
  width: 100%;
`

const Trust1 = () => {
  const data = useStaticQuery(graphql`
    query {
      trust1: file(relativePath: { eq: "trust1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.trust1?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <ServiceImage fluid={data.trust1.childImageSharp.fluid}></ServiceImage>
}

export default Trust1
