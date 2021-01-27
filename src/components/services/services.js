import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./services.css"
import Img from "gatsby-image"
import rehypeReact from "rehype-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { icon, library } from "@fortawesome/fontawesome-svg-core"
import Icon1 from "./markserv/service1"
import Icon2 from "./markserv/service2"
import Icon3 from "./markserv/service3"
import Icon4 from "./markserv/service4"

library.add(faWrench)

const Services = ({ data }) => {
  const serviceq = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            htmlAst
            frontmatter {
              title
              description
              serviceImg: Img {
                childImageSharp {
                  fluid(maxWidth: 370, maxHeight: 260, quality: 72) {
                    ...GatsbyImageSharpFluid_withWebp
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
              Icon
            }
          }
        }
      }
    `
  )

  const servs = serviceq.allMarkdownRemark.nodes

  /*   const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark */
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "service-1": Icon1,
      "service-2": Icon2,
      "service-3": Icon3,
      "service-4": Icon4,
    },
  }).Compiler

  return (
    <div className="p-3 p-md-5 container-fluid">
      <div
        className="text-center"
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
        }}
      >
        <h3 className="btwline">
          <span className="line"></span>
          OUR SERVICES
          <span className="line"></span>
        </h3>

        <h2>Quality Service is Our Guarantee</h2>
        <p style={{ paddingBottom: `1.75em` }}>
          We offer a wide range of plumbing services catered to both residential
          and commercial clients. Even the all-powerful Pointing has no control
          about the blind texts.
        </p>
      </div>
      <div
        className="row"
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
        }}
      >
        {servs.map(serv => {
          return (
            <div
              className="card col-lg-3 col-md-6 col-sm-6 col-12 "
              style={{ width: `18rem` }}
            >
              {/*          <img className="card-img-top" src="..." alt="Card image cap"></img> */}
              <div
                className="card-img-top card-zoom2"
                style={{
                  borderRadius: "1.25rem",
                  zIndex: "",
                }}
              >
                <Img
                  style={{
                    borderRadius: "1.25rem",
                    zIndex: "",
                  }}
                  className="card-img-top mt-3 card-zoom"
                  fluid={serv.frontmatter.serviceImg.childImageSharp.fluid}
                  title="Click to download"
                  alt={serv.frontmatter.title + "thumbnail"}
                />
              </div>
              <div className="Iconback">{renderAst(serv.htmlAst)}</div>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="line"></span>
                  {serv.frontmatter.title}
                </h5>
                <p className="card-text">{serv.frontmatter.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Services
