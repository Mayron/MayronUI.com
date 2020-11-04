/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useCallback, useState } from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import { Section } from "../styles/css/containers";
import { graphql, useStaticQuery } from "gatsby";
import BlogPostPreview from "../components/blog/blog-post-preview";
import ToolBar from "../components/common/toolbar";
import styled from "@emotion/styled";
import colors from "../styles/colors";

const ResultsMessage = styled.p`
  padding-bottom: 30px;

  em {
    color: ${colors.link.default};
  }
`;

export type SortByOption = "Newest" | "Oldest" | "Shortest" | "Longest";
const sortByOptions: SortByOption[] = ["Newest", "Oldest", "Shortest", "Longest"];

export type ShowOption = "All" | "Featured";
const showOptions: ShowOption[] = ["All", "Featured"];

const BlogPage: React.FC<RouteComponentProps> = () => {
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(0);
  const [sortByFilter, setSortByFilter] = useState(0);

  const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const onShowFilterChange = useCallback((filter: number) => {
    setShowFilter(filter);
  }, []);

  const onSortByFilterChange = useCallback((filter: number) => {
    setSortByFilter(filter);
  }, []);

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              body {
                childMarkdownRemark {
                  timeToRead
                  excerpt
                }
              }
              title
              featured
              createdAt
            }
          }
        }
      }
    `,
  );

  let blogPosts: IBlogPost[] = data.allContentfulBlogPost.edges.map((e: any) => {
    const { title, featured, createdAt } = e.node;
    const { timeToRead, excerpt } = e.node.body.childMarkdownRemark;
    const article: IBlogPost = {
      timeToRead,
      excerpt,
      title,
      featured,
      createdAt,
    };

    return article;
  });

  if (query) {
    blogPosts = blogPosts.filter((a) => {
      const inExcerpt = a.excerpt.toLowerCase().includes(query.toLowerCase());
      const inTitle = a.title.toLowerCase().includes(query.toLowerCase());
      return inExcerpt || inTitle;
    });
  }

  if (showOptions[showFilter] === "Featured") {
    blogPosts = blogPosts.filter((a) => a.featured);
  }

  blogPosts = blogPosts.sort((a, b) => {
    if (sortByOptions[sortByFilter] === "Shortest") {
      return a.timeToRead > b.timeToRead ? 1 : -1;
    }

    if (sortByOptions[sortByFilter] === "Longest") {
      return a.timeToRead > b.timeToRead ? -1 : 1;
    }

    const timeA = new Date(a.createdAt);
    const timeB = new Date(b.createdAt);

    if (sortByOptions[sortByFilter] === "Oldest") {
      return timeA.getTime() > timeB.getTime() ? 1 : -1;
    }

    return timeA.getTime() > timeB.getTime() ? -1 : 1;
  });

  return (
    <Layout title="Blog" gaCategory="Blog" backgroundColor="#F8F8F8">
      <Section
        widthType="text"
        css={css`
          padding-bottom: 30px;
        `}
      >
        <ToolBar
          onSearchChange={onSearchChange}
          show={{
            options: showOptions,
            selected: showFilter,
            onChange: onShowFilterChange,
          }}
          sortBy={{
            options: sortByOptions,
            selected: sortByFilter,
            onChange: onSortByFilterChange,
          }}
        />

        {query &&
          (blogPosts.length === 0 ? (
            <ResultsMessage>
              No results found for <em>{query}</em>
            </ResultsMessage>
          ) : (
            <ResultsMessage>
              Showing {blogPosts.length} result{blogPosts.length > 1 && "s"} for{" "}
              <em>{query}</em>
            </ResultsMessage>
          ))}

        {blogPosts.length > 0 && (
          <ul>
            {blogPosts.map((article, key) => (
              <BlogPostPreview data={article} key={key} query={query} />
            ))}
          </ul>
        )}
      </Section>
    </Layout>
  );
};

export default BlogPage;
