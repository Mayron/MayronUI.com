/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";
import Styles from "./styles";

interface IItemProps {
  text: string;
  href: string;
}

const Item: React.FC<IItemProps> = ({ text, href }) => {
  return (
    <Styles.NavItem>
      <Link to={href} activeClassName="active">
        {text}
      </Link>
    </Styles.NavItem>
  );
};

class NavItemList extends React.Component {
  static Item = Item;

  render(): JSX.Element {
    return (
      <Styles.NavBar role="navigation">
        <Styles.NavItemList>{this.props.children}</Styles.NavItemList>
      </Styles.NavBar>
    );
  }
}

export default NavItemList;
