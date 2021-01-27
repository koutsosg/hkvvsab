import React, { Component } from "react"
import Slider from "react-slick"
import Image from "./image"
import Image2 from "./image2"
import Image3 from "./image3"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
      accessibility: true,
      pauseOnHover: false,
      arrows: false,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image />
            <div class="text-block">
              <p>Här har vi många års erfarenhet!</p>
            </div>
          </div>
          <div>
            <Image2 />
            <div class="text-block">
              <p>Filip och Jonathan monterar en ny Lenhovda radiator.</p>
            </div>
          </div>
          <div>
            <Image3 />
            <div class="text-block">
              <p>Robban och Forden på uppdrag</p>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
