import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>
        Serena Huang <CopyrightIcon /> 2023
      </span>
      <a href="https://github.com/sdhlyhb" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/dantinghuang/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Footer;
