import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./info-card.css"

const CallButton = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  cursor: pointer;

  border-style: solid;
  background-color: #454545;
  border-color: #000000;
  border-width: 1px;
  padding: 1vh;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }

  :hover {
    background-color: #a9abac;
    color: white;
    transition: all 0.3s ease-in;
  }
`
const InfoContain = styled.div``
const InfoContain2 = styled.div`
  width: 100%;
  height: 100%;
`

const Front = styled.div``
const Back = styled.div``

const Text = styled.p``
const Tele = styled.a`

  }
`
const Title = styled.h3`

  }
`

const InfoCard = () => {
  const data = useStaticQuery(graphql`
    query {
      service1: file(relativePath: { eq: "service1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service2: file(relativePath: { eq: "service2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      service3: file(relativePath: { eq: "service3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 370, maxHeight: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="pt-5 pb-5 container text-center"
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      {" "}
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
      <InfoContain className="row py-2">
        <InfoContain2 className="text-center container col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card card-flip img">
            <Front className="card-front  ">
              <div className="card-body">
                <Title className="card-title">
                  {" "}
                  <span className="line"></span>services 1
                </Title>
                <Text className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
            </Front>
            <Back className="card-back">
              <div className="card-body">
                <Img
                  fluid={data.service1.childImageSharp.fluid}
                  className="img"
                ></Img>
                <CallButton href=""> READ MORE</CallButton>
              </div>
            </Back>
          </div>
        </InfoContain2>
        <InfoContain2 className="text-center container col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card card-flip img">
            <Front className="card-front  ">
              <div className="card-body">
                <Title className="card-title">
                  {" "}
                  <span className="line"></span>services 2
                </Title>
                <Text className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
            </Front>
            <Back className="card-back">
              <div className="card-body">
                <Img
                  fluid={data.service2.childImageSharp.fluid}
                  className="img"
                ></Img>
                <CallButton href=""> READ MORE</CallButton>
              </div>
            </Back>
          </div>
        </InfoContain2>
        <InfoContain2 className="text-center container col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card card-flip img">
            <Front className="card-front  ">
              <div className="card-body">
                <Title className="card-title">
                  {" "}
                  <span className="line"></span>services 3
                </Title>
                <Text className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
            </Front>
            <Back className="card-back">
              <div className="card-body">
                <Img
                  fluid={data.service3.childImageSharp.fluid}
                  className="img"
                ></Img>
                <CallButton href=""> READ MORE</CallButton>
              </div>
            </Back>
          </div>
        </InfoContain2>
      </InfoContain>
    </div>
  )
}
export default InfoCard
