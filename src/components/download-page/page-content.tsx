/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { container } from "../../styles/css/containers";
import media from "../../styles/media";
import vars from "../../styles/variables";
import React from "react";

const StyledPageContent = styled.div`
  ${container};
  padding-top: ${vars.sectionSpacing};
  padding-bottom: ${vars.sectionSpacing};
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1060px;
  width: 100%;

  ${media.down("xs")`
    margin-left: -10px;
    margin-right: -10px;
    width: calc(100% + 20px);
  `};

  @media (max-width: 1010px) {
    section,
    article {
      width: 100%;
    }
  }
`;

const PageContent: React.FC = ({ children }) => {
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
    <StyledPageContent>
      <style className="embedly-css">
        {`
          .hdr, .brd, .art-bd-img  {
            display: none !important;
          }

          .txt-bd { padding: 0 !important; }

          .art-bd {
            max-width: 1px;
            max-height: 1px;
            visibility: hidden;
          }

          .embedly-card-hug {
            margin: 0 !important;
          }

          body {
            padding: 0 !important;
          }
        `}
      </style>

      {children}
    </StyledPageContent>
  );
};

export default PageContent;
