import React from "react";
import Layout from "../components/layout/Layout";
import BlogList from "../components/common/BlogList";

const BlogPage = ({ data }) => (
  <Layout>
    <div className="my-10">
      <h1 className="text-4xl font-bold">Latest Blog Posts</h1>

      <BlogList />
    </div>
  </Layout>
);

export default BlogPage;
