import React from "react"

import SEO from "../components/common/SEO"
import Layout from "../components/common/Layout"
import Hero from "../components/landing/Hero"
import Card from "../components/common/Card"

import config from "../data/config"
import Column from "../components/common/Column"
import PictureCard from "../components/common/PictureCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="home">
      <Hero />
    </section>
    <section id="about">
      <Card classes="p-8" dark={true}>
        <h3 className="text-center font-semibold text-white text-3xl my-4">
          {config.about.title}
        </h3>
        <p className="w-9/12 mx-auto mt-2 mb-4 text-center tracking-wide font-light">
          {config.about.description}
        </p>
      </Card>
    </section>
    <section id="skills">
      <div className="lg:flex lg:justify-around">
        {config.skills.map((skill, index) => (
          <Column key={index} column={skill} />
        ))}
      </div>
    </section>
    <section id="projects">
      <h2 className="text-center font-bold tracking-tight text-4xl">
        {config.projects.title}
      </h2>
      <p className="my-6 text-center">{config.projects.subtitle}</p>

      <div
        className="flex flex-wrap justify-around"
        style={{ minHeight: "500px" }}
      >
        {config.projects.projects.map((project, index) => (
          <PictureCard key={index} {...project} />
        ))}
      </div>
    </section>
    <section id="repositories">
      {/*  My repo contributions to open source. */}
    </section>
    <section id="contact">
      {/*  How to get in contact, email, twitter, etc. */}

      <Card
        dark={true}
        classes="z-30 py-6 px-10 flex flex-wrap md:flex-no-wrap items-center justify-around"
      >
        <h5 className="font-semibold text-white text-xl md:my-4">
          Let's Get in touch.
        </h5>
        <p className="mx-4 md:mx-10 my-4 text-center md:text-left tracking-wide font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-transparent hover:bg-blue-400 border border-blue-400 focus:outline-none hover:border-transparent text-blue-400 hover:text-white rounded-full py-2 px-6 whitespace-no-wrap">
          Say Hi.
        </button>
      </Card>
    </section>
  </Layout>
)

export default IndexPage
