import React from "react"

import HeroBlob from "../assets/blobs/hero-blob.svg"
import HeroBlob2 from "../assets/images/HeroBlob2.svg"
import Combined from "../assets/images/combined.svg"
import Button from "./button"
import HeroSvg from "../assets/images/heroSVG.svg"

// import Blob from "../assets/blobs/hero-blob.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__svg">
          <div className="blob">
            <HeroBlob2 />
          </div>

          <HeroSvg className="svg" />
          {/* <Combined /> */}
        </div>
        <div className="hero__content">
          <p>
            <span>Hi,</span> my name is
          </p>
          <h1>Tomasz Posiadala</h1>
          <h2>Front-End Developer</h2>

          <p className="description">
            I love helping businesses and individuals make their online presence
            a smooth, and visually appealing experience.{" "}
          </p>

          <div className="buttons">
            <Button to="/projects">My Projects</Button>
            <Button secondary to="/contact">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
