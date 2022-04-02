import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div>
      <h2>Welcome to Tshirt Mania!!!</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/orderreview">OrderReview</Link>

        {/* <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/orderreview">OrderReview</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink> */}
      </nav>
    </div>
  );
};

export default Header;
