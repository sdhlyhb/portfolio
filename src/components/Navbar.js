import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const isLargerScreen = useMediaQuery({
    query: "(min-width: 750px)",
  });
  return (
    <div className="navbar">
      {!isLargerScreen && <MobileNavbar />}
      {isLargerScreen && (
        <ul className="nav-list">
          <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
          </div>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
