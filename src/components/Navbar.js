import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../styles/Navbar.css";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const isLargerScreen = useMediaQuery({
    query: "(min-width: 750px)",
  });
  return (
    <div className="navbar">
      {!isLargerScreen && <MobileNavbar />}
      {isLargerScreen && (
        <div className="links-container">
          <Link to="/" className="link">
            {" "}
            Home{" "}
          </Link>

          <Link to="/projects" className="link">
            {" "}
            Projects{" "}
          </Link>

          <Link to="/about-me" className="link">
            {" "}
            About Me{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
