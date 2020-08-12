import React from "react";
import Layout from "../components/layout/Layout";
import BlogList from "../components/common/BlogList";
import SEO from "../components/common/SEO"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog Posts" description="The latest blog posts on a variety of topics." />
    <div className="my-10">
      <h1 className="text-4xl font-bold">Latest Blog Posts</h1>

      <BlogList />
    </div>
  </Layout>
);

export default BlogPage;
