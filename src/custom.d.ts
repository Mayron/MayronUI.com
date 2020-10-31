// ignores warnings from importing svgs

declare module "*.svg" {
  interface ISvgImageProps extends React.SVGProps<SVGSVGElement> {
    title: string;
  }

  export const ReactComponent: React.SFC<ISvgImageProps>;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare interface IChildImageSharp {
  childImageSharp: {
    fixed: FixedObject;
    fluid: FluidObject;
  };
}

declare interface IBlogPost {
  html?: string;
  timeToRead: number;
  excerpt: string;
  title: string;
  featured: boolean;
  createdAt: string;
}

declare interface IStep {
  content: {
    childMarkdownRemark: {
      html: string;
    };
  };
  title: string;
  step: number;
}

declare interface INode<T> {
  node: T;
}

declare interface IProjectStepData {
  allContentfulProjectStep: {
    edges: INode<IStep>[];
  };
}
