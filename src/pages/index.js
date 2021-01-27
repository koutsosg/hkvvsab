import React from "react"
import { Link } from "gatsby"
import SimpleSlider from "../components/slider/carousel"
import Layout from "../components/layout"
import Section1Img from "../components/sectionOne/sectionImg"
import SEO from "../components/seo"
import Services from "../components/services/services"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import BetweenOne from "../components/betweenone"
import BetweenTwo from "../components/betweentwo"

import Gallery from "../components/gallery/gallery"
const CallButton = styled.a`
  color: white;
  cursor: pointer;

  border-style: solid;
  background-color: #454545;
  border-color: #000000;
  border-width: 1px;
  padding: 1vh;
  font-size: 1.5vw;
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }

  :hover {
    background-color: #a9abac;
    color: white;
    transition: all 0.3s ease-in;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleSlider />
    <div className="container-fluid">
      <div
        className="row "
        style={{
          margin: `0 auto`,
          maxWidth: 1400,

          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <Section1Img />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="text-center ">
            <h3 className="btwline">
              <span className="line"></span>
              About us
              <span className="line"></span>
            </h3>
          </div>
          <h2>Helhetsleverantör med många år i branschen </h2>
          <p style={{ paddingBottom: `1.75em` }}>
            När vi grundade Hylén & Kjellander VVS tog vi med oss erfarenhet
            från många år inom service och entreprenad. Vi brinner för det vi
            gör och sätter alltid uppdragsgivaren i första rummet. Säkra, trygga
            arbetsprocesser och klanderfritt utförande är grunden i allt vårt
            arbete.
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-6 col-12 ">
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              Qualified team
              <br />
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              Affordable pricing
              <br />
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              Quick service
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6 col-12 ">
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              10+ years experience
              <br />
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              100+ projects done
              <br />
              <FontAwesomeIcon
                className="mx-1 bColor"
                size="md"
                icon={faCheckCircle}
              />
              Plumbing Experts
            </div>
          </div>
          <br />
          <p style={{ paddingBottom: `1.75em` }}>
            Företaget hade inte heller varit så framgångsrikt om det inte vore
            för våra handplockade medarbetare. Teamet består av skickliga
            problemlösare med positiv attityd och hög arbetsmoral. Alla
            fortbildas löpande för att möta marknadens skiftande krav – det är
            tryggt att anlita oss.
          </p>
          <CallButton href="">Learn More</CallButton>
        </div>
      </div>
    </div>
    <BetweenOne />
    <Services />
    <BetweenTwo />
    <Gallery />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
