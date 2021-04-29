import React from "react";
import NavLink from "../../common/navItem";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/posts", name: "Posts" },
];

const Navigation = () => {
  return (
    <div>
      {navItems.map((navItem, index) => (
        <NavLink key={index} path={navItem.path} navName={navItem.name} />
      ))}
    </div>
  );
};

export default Navigation;
