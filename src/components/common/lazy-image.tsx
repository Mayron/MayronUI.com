/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import React, { useRef, useEffect } from "react";
import media, { BreakPoints } from "../../styles/media";

interface ILazyImageProps {
  src?: string;
  alt: string;
  styles?: SerializedStyles;
  up?: BreakPoints;
  down?: BreakPoints;
  between?: {
    lower: BreakPoints;
    upper: BreakPoints;
  };
}

const LazyImage: React.FC<ILazyImageProps> = ({
  src,
  alt,
  styles,
  up,
  down,
  between,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  let mediaQueryCss: SerializedStyles | undefined;

  if (up || down || between) {
    mediaQueryCss = css`
      &:not(.lazy) {
        ${
          up &&
          media.up(up)`
          content: url(${src});
        `
        }

        ${
          down &&
          media.down(down)`
          content: url(${src});
        `
        }

        ${
          between &&
          media.between(between.lower, between.upper)`
          content: url(${src});
        `
        }
      }
    `;
  }

  useEffect(() => {
    if (!imgRef.current) return;

    if ("IntersectionObserver" in window) {
      const lazyImageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const lazyImage = entry.target as HTMLImageElement;

              if (!mediaQueryCss) {
                lazyImage.src = lazyImage.dataset.src ?? "";
                lazyImage.srcset = lazyImage.dataset.srcset ?? "";
              }

              lazyImage.classList.remove("lazy");
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        },
        {
          root: null,
          rootMargin: "100px",
          threshold: [0],
        },
      );

      lazyImageObserver.observe(imgRef.current as Element);
    } else {
      const datSrc = imgRef.current.getAttribute("data-src");
      if (datSrc) {
        if (!mediaQueryCss) {
          imgRef.current.setAttribute("src", datSrc ?? "");
        }

        imgRef.current.classList.remove("lazy");
      }
    }
  }, [mediaQueryCss, src]);

  return (
    <React.Fragment>
      <noscript>
        <img src={src} alt={alt} />
      </noscript>
      <img
        ref={imgRef}
        className="lazy"
        draggable="false"
        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        data-src={src}
        data-srcset={src}
        alt={alt}
        css={[mediaQueryCss, styles]}
      />
    </React.Fragment>
  );
};

export default LazyImage;
