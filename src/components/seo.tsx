import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface ISEOProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: IMeta[];
}

interface IMeta {
  name: string;
  content: string;
}

const SEO: React.FC<ISEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  const jsonLinkedData = {
    "@context": "http://www.schema.org",
    "@type": "CreativeWork",
    name: "MayronUI.com",
    url: "https://mayronui.com",
    logo: `https://mayronui.com/images/logo.png`,
    about: metaDescription,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? `${title} | ` : site.siteMetadata.title}
      titleTemplate={title && `%s${site.siteMetadata.title}`}
      defer={false}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:url`,
          content: "https://mayronui.com",
        },
        {
          name: `twitter:site`,
          content: "@MayronWoW",
        },
        {
          name: `twitter:creator`,
          content: "@MayronWoW",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link rel="shortcut icon" href="/favicon32.png" type="image/png" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap;"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLinkedData) }}
      />
    </Helmet>
  );
};

export default SEO;
