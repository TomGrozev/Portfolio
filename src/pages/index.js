import React from "react";
import { Link } from "gatsby";

import SEO from "../components/common/SEO";
import Layout from "../components/layout/Layout";
import Hero from "../components/landing/Hero";
import Card from "../components/common/Card";

import config from "../data/config";
import Column from "../components/common/Column";
import BlogList from "../components/common/BlogList";
import Projects from "../components/landing/Projects";

const IndexPage = () => (
  <Layout home={true}>
    <SEO title="Home" />
    <section id="home" className="mt-0">
      <Hero />
    </section>
    <section id="about">
      <Card classes="p-8" dark={true}>
        <h3 className="text-center font-semibold text-white text-3xl my-4">
          {config.about.title}
        </h3>
        <p className="w-full md:w-9/12 mx-auto mt-2 mb-4 text-center tracking-wide leading-relaxed font-light">
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
    <section id="projects" className="mb-32">
      <h2 className="text-center font-bold tracking-tight text-4xl">
        {config.projects.title}
      </h2>
      <p className="my-6 text-center">{config.projects.subtitle}</p>

      <Projects projects={config.projects.projects} />

      <div className="my-32 flex flex-col items-center">
        <p className="text-center text-xl tracking-tight">
          Code is always better when it's open sourced. Take a look at my
          contributions.
        </p>
        <a
          className="button-darker mt-3"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TomGrozev"
        >
          My GitHub Profile
        </a>
      </div>
    </section>
    <section id="blog">
      <h2 className="text-center font-bold tracking-tight text-4xl">
        {config.blog.title}
      </h2>
      <p className="my-6 text-center">{config.blog.subtitle}</p>

      <BlogList limit={3} />
      <div className="flex justify-center">
        <Link to="/blog" className="button-darker">
          All Blog Posts
        </Link>
      </div>
    </section>
    <section id="contact" className="-mb-16">
      <Card
        dark={true}
        classes="z-30 py-6 px-10 flex flex-wrap md:flex-no-wrap items-center justify-around"
      >
        <h3 className="font-semibold text-white text-xl md:my-4 text-center md:text-left">
          {config.contact.title}
        </h3>
        <p className="mx-4 md:mx-10 my-4 text-center md:text-left tracking-wide font-light">
          {config.contact.text}
        </p>
        <Link to="start-a-project" className="button">
          {config.contact.button}
        </Link>
      </Card>
    </section>
  </Layout>
);

export default IndexPage;
