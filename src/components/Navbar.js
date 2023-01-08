import React from "react";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
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
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="about-me">
              About Me
            </a>
          </li>
          <li>
            <a className="nav-link" href="#my-projects">
              My Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
