import React, { useState, useEffect } from "react";
import { Button, Link, Tooltip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CollectionsIcon from "@mui/icons-material/Collections";
import "../styles/AboutMe.css";

function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutme-container">
      <h1 className="aboutme-header">About Me</h1>
      <div className="bio">
        Full-Stack Software Engineer with Ph.D in Biomedical Engineering.
        Previously a researcher studying disease-related peptide aggregates
        structures using solid state Nuclear Megnetic Resonance.
        <Tooltip title="Click if you woule like to know more about my previous research">
          <Button
            variant="text"
            component={Link}
            target="_blank"
            href="https://scholar.google.com/citations?hl=en&user=BPwYjYgAAAAJ"
          >
            <SchoolIcon />
          </Button>
        </Tooltip>
      </div>
      <br />
      <div className="bio">
        I discovered my passion of coding when I was in grad school. I enjoy
        learning and working with the latest technologies. I also love to work
        with other engineers on challenging projects.
      </div>
      <br />
      <div className="bio">
        When I'm not coding, I enjoy cooking and traveling. Unlike doing wet lab
        experiments, you will hardly get any negative results from cooking... as
        long as the food is edible. <span>&#128514;</span>
      </div>
      <h3>Let's get in touch</h3>
      <a className="contact-btn" href="mailto:serena.huangdanting@gmail.com">
        <Button variant="contained">Contact Me</Button>
      </a>
    </div>
  );
}

export default AboutMe;
