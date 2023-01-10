import React, { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="about">
        <h1> Hi, I am Serena Huang</h1>
        <div className="prompt">
          <p>A passonate full-stack software engineer skilled in MERN stack.</p>
          <div className="icons">
            <a href="mailto:serena.huangdanting@gmail.com">
              <EmailIcon />
            </a>
            <a
              href="https://github.com/sdhlyhb"
              target="_blank"
              rel="noreferrer"
            >
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
          <a href="#skills-div">
            <Button variant="contained">Check out my skills!</Button>
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills and Tools</h1>
        <div className="skills-container" id="skills-div">
          <img
            alt="javascript-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <img
            alt="html5-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />

          <img
            alt="react-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />

          <img
            alt="css3-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          />

          <img
            alt="Mui-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />

          <img
            alt="jquery-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
          />

          <img
            alt="nodejs-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />

          <img
            alt="socketio-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg"
          />

          <img
            alt="express-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />

          <img
            alt="mysql-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />

          <img
            alt="postgres-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          />

          <img
            alt="mongodb-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />

          <img
            alt="nginx-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
          />

          <img
            alt="jest-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          />

          <img
            alt="mocha-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
          />

          <img
            alt="aws-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />

          <img
            alt="vscode-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
          />

          <img
            alt="git-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          />

          <img
            alt="npm-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          />

          <img
            alt="vim-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"
          />

          <img
            alt="webpack-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg"
          />

          <img
            alt="babel-svg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
