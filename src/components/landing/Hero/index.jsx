import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import img from "../../../images/hero-img.svg"

const Thumbnail = () => (
  <div className="relative flex-1 w-full sm:w-auto m-0 md:m-6" style={{minWidth: "300px", maxWidth: "700px"}}>
    <img className="max-w-full m-0" src={img} alt="Hi, I'm Tom." />
  </div>
);

const Hero = () => (
  <div className="flex flex-wrap-reverse items-center justify-between mt-8 mb-32 sm:mb-24 md:mb-12">
    <div className="relative mx-4 pr-4 md:pr-8 lg:pr-16 xl:pr-40">
      <h1 className="font-bold text-6xl">Hi</h1>
      <h2 className="font-light text-4xl">I'm Tom.</h2>
      <p className="mt-5 font-semibold">Why not <AnchorLink className="font-medium inline-block" href="#contact">Say Hello</AnchorLink></p>
    </div>
    <Thumbnail />
  </div>
);

export default Hero;
