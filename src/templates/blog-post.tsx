/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";
import BackButton from "../components/common/back-button";
import ContentfulArticle from "../components/blog/contentful-article";
import BlogFooter from "../components/blog/blog-footer";
import BlogHeader from "../components/blog/blog-header";
import Section from "../styles/css/containers";

interface IBlogPostProps {
  pageContext: IBlogPost;
}

const BlogPost: React.FC<IBlogPostProps> = ({ pageContext }) => {
  const { html, timeToRead, excerpt, title, featured, createdAt } = pageContext;
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initEmbedly = (w: any, d: Document) => {
        const id = "embedly-platform";
        const n = "script";
        if (!d.getElementById(id)) {
          w.embedly =
            w.embedly ||
            function (...args: any[]) {
              (w.embedly.q = w.embedly.q || []).push(args);
            };
          const e = d.createElement(n);
          e.id = id;
          e.async = true;
          e.src =
            (document.location.protocol === "https:" ? "https" : "http") +
            "://cdn.embedly.com/widgets/platform.js";
          const s = d.getElementsByTagName(n)[0];
          s.parentNode?.insertBefore(e, s);
        }
      };

      const cards = document.getElementsByClassName("embedly-card");

      if (cards.length > 0) {
        initEmbedly(window, document);
        const w: any = window;
        Array.from(cards).forEach((c) => w.embedly("card", c));
      }
    }

    const links = bodyRef.current?.getElementsByTagName("a");

    if (links && links.length > 0) {
      Array.from(links).forEach((link) => {
        link.target = "_blank";
        link.rel = "noreferrer noopener";
      });
    }
  }, []);

  return (
    <Layout title={pageContext.title} gaCategory="BlogArticle" description={excerpt}>
      <Section widthType="text">
        <BackButton href="/blog" text="Back to Blog" />
        <article
          css={css`
            margin-top: 30px;
          `}
        >
          <BlogHeader title={title} timeToRead={timeToRead} createdAt={createdAt} />
          {html && (
            <ContentfulArticle ref={bodyRef} dangerouslySetInnerHTML={{ __html: html }} />
          )}
          <BlogFooter />
        </article>
      </Section>
    </Layout>
  );
};

export default BlogPost;
