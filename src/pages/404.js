import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/common/SEO";
import img from "../images/404.svg"
import { navigate } from "gatsby-link"

function goBack() {
  navigate(-1)
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col items-center justify-around my-10">
      <div className="relative w-full lg:w-10/12 px-6 lg:px-0 m-0 md:m-6">
        <img className="max-w-full m-0" src={img} alt="404 - Page Not Found" />
      </div>
      <button onClick={goBack} className="button-darker mt-4">Huh... Take me back</button>
    </div>
  </Layout>
);

export default NotFoundPage;
