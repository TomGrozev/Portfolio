import React from "react";
import Layout from "../components/layout/Layout";

const StartAProject = () => (
  <Layout>
    <div className="container relative my-16 px-16">
      <h2 className="text-4xl tracking-tighter text-center leading-normal">
        I'm writing some random stuff for now about the right length.
      </h2>

      <form className="w-11/12 md:w-8/12 mx-auto mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="contact-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="contact-name"
              type="text"
              placeholder="John"
            />
            {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="contact-email"
              type="email"
              placeholder="Doe"
            />
          </div>
        </div>
      </form>
    </div>
  </Layout>
);

export default StartAProject;
