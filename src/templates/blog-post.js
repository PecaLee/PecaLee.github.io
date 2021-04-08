import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  color: rgb(77, 100, 150);
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
  color: rgb(77, 100, 150);
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: underline;
    position: relative;
    color: rgb(77, 100, 150);
  }

  a > code:hover {
    text-decoration: underline;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
