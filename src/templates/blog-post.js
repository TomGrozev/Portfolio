import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Icon from "../components/common/Icon";
import Icons from "../components/icons";
import Img from "gatsby-image";

const BlogPost = ({ data }) => {
  const { title, tags, date, coverImage } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div className="my-10">
        <div className="border-b-2 border-gray-300 py-3 mb-10">
          <Img fluid={coverImage.childImageSharp.fluid} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mb-2">{date}</p>
            <div className="text-sm text-gray-600 space-x-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-300 py-1 px-2 leading-none rounded-lg inline-flex items-center"
                >
                  <Icon icon={Icons.Tag} size={0.7} />{" "}
                  <span className="ml-1">{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const BlogQuery = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        date(formatString: "MMM Do, YYYY")
        coverImage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
