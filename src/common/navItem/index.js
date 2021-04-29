import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  if (!props) {
    return;
  }
  const { path, navName } = props;
  return <Link to={path}>{navName}</Link>;
};

export default NavItem;
