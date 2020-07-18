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
    <SEO title="Home"/>
    <section id="home">
      <Hero/>
    </section>
    <section id="about">
      <Card classes="p-8" dark={true}>
        <h3 className="text-center font-semibold text-white text-3xl my-4">I'm a developer from Australia.</h3>
        <p className="w-9/12 mx-auto mt-2 mb-4 text-center tracking-wide font-light">Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </Card>
    </section>
    <section id="skills">
      <div className="lg:flex lg:justify-around">
        {config.skills.map((skill, index) => (
          <Column key={index} column={skill}/>
        ))}
      </div>
    </section>
    <section id="projects">
      <h2 className="text-center font-bold tracking-tight text-4xl">Recent Projects</h2>
      <p className="my-6 text-center">Here are some of my favorite recent projects. Check them out.</p>

      <div className="flex flex-wrap justify-around" style={ { minHeight: '500px' }}>
        {config.projects.map((project, index) => (
          <PictureCard key={index} {...project} />
        ))}
      </div>
    </section>
    <section id="repositories">
      {/*  My repo contributions to open source. */}
    </section>
    <section id="contact">
      {/*  How to get in contact, email, twitter, etc. */}

      <Card dark={true} classes="clearfix z-30 p-6">
        <h3 className="font-semibold text-white text-3xl my-4">Let's Get in touch.</h3>
        <p className="mt-2 mb-4 tracking-wide font-light">Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.</p>
        <button className="bg-transparent hover:bg-blue-400 border border-blue-400 focus:outline-none hover:border-transparent text-blue-400 hover:text-white rounded-full py-2 px-6 mr-3 float-right">Say Hi.</button>
      </Card>
    </section>
  </Layout>
)

export default IndexPage
