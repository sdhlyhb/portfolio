import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project-entry">
          <img
            className="project-img"
            src="https://camo.githubusercontent.com/7931d1e1da04260b25522b496d019375c8f032944ed8f48ce7637dcca77de4db/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f306e685a75386769526938356657746779752f67697068792d646f776e73697a65642d6c617267652e676966"
            alt="screenshot of pawprints"
          />
          <div className="project-info">
            <div className="project-links">
              <a
                className="project-github"
                href="https://github.com/sdhlyhb/PawPrints"
                aria-label="link to pawprints github repo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <a
              className="project-title"
              href="https://github.com/sdhlyhb/PawPrints"
              rel="noopener noreferrer"
              target="_blank"
            >
              PawPrints
            </a>
            <div className="project-desc">
              An mobile-first web application that allows registered users to
              chat and share pets photos with friends in real-time. The shared
              photos will be auto-expired and the sender will get notified if
              receiver has downloaded the photos.
            </div>
            <div className="project-tech-stacks">
              <span className="project-tech">React</span>
              <span className="project-tech">Material-UI</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">Socket.io</span>
              <span className="project-tech">MongoDB</span>
              <span className="project-tech">Jest</span>
            </div>
          </div>
        </div>
        <div className="project-entry">
          <img
            className="project-img"
            src="https://user-images.githubusercontent.com/8715043/205565058-9c5dddf7-664a-4e00-8250-1450114b2039.gif"
            alt="screenshot of mvp-JobTrckr"
          />
          <div className="project-info">
            <div className="project-links">
              <a
                className="project-github"
                href="https://github.com/sdhlyhb/mvp-JobTrackr"
                aria-label="link to jobTrackr github repo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <a
              className="project-title"
              href="https://github.com/sdhlyhb/mvp-JobTrackr"
              rel="noopener noreferrer"
              target="_blank"
            >
              MVP-JobTrackr
            </a>
            <div className="project-desc">
              Solo fullstack project. A light-weight single-page web app that
              allows authenticated users to track their job applications
              timelines, view metrics and download records in csv format
            </div>
            <div className="project-tech-stacks">
              <span className="project-tech">React</span>
              <span className="project-tech">Material-UI</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">Firebase</span>
              <span className="project-tech">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="project-entry">
          <img
            className="project-img"
            src="https://user-images.githubusercontent.com/8715043/200499033-db227c65-27f3-4c38-8918-29e0f0ca201a.gif"
            alt="screenshot of FEC project"
          />
          <div className="project-info">
            <div className="project-links">
              <a
                className="project-github"
                href="https://github.com/sdhlyhb/ProjectAtelier"
                aria-label="link to FEC github repo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <a
              className="project-title"
              href="https://github.com/sdhlyhb/ProjectAtelier"
              rel="noopener noreferrer"
              target="_blank"
            >
              Atelier: an E-commerce website
            </a>
            <div className="project-desc">
              Worked with 3 other frontend engineers in Agile enviroment to
              redesign and rebuild an outdated retail portal. I was responsible
              for the Ratings and Reviews module, which will allows users to
              view, upvote, report, search, filter and sort reviews and also
              post their ratings and reviews of the products.
            </div>
            <div className="project-tech-stacks">
              <span className="project-tech">React</span>
              <span className="project-tech">CSS</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">HTML</span>
              <span className="project-tech">Webpack</span>
              <span className="project-tech">Jest</span>
            </div>
          </div>
        </div>
        <div className="project-entry">
          <img
            className="project-img"
            src="https://user-images.githubusercontent.com/8715043/201834978-145f1426-3c72-4d4e-9f43-9e573f7a4a13.png"
            alt="screenshot of backend project"
          />
          <div className="project-info">
            <div className="project-links">
              <a
                className="project-github"
                href="https://github.com/sdhlyhb/SystemDesign_QnA_Microservice"
                aria-label="link to sdc github repo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <a
              className="project-title"
              href="https://github.com/sdhlyhb/SystemDesign_QnA_Microservice"
              rel="noopener noreferrer"
              target="_blank"
            >
              System Design: Q&A API
            </a>
            <div className="project-desc">
              A backend microservice aims to provide RESTful API routes to serve
              an existing e-commerce frontend. Horizontally scaled to handle
              traffic load up to 4500 RPS
            </div>
            <div className="project-tech-stacks">
              <span className="project-tech">PostgreSQL</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">New Relic</span>
              <span className="project-tech">K6</span>
              <span className="project-tech">Nginx</span>
              <span className="project-tech">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
