import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { Profile } from "../Profile/Profile";

export const Nav = () => {
  return (
    <div className="container_nav">
      <div className="container_link">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/lore"}>Lore</Link>
      </div>
      <Profile />
    </div>
  );
};
