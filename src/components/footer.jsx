import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-4" id="footer">
        <div className="container-footer">
          <span className="footer-text footer">
            Designed and built by Jackson Cho. Coded with
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              id="react-icon"
            >
              <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
            </a>
            and
            <span id="love-icon">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </span>
            at
            <a
              href="https://github.com/JacksonMcNabb/jacksonmcnabb.com"
              target="_blank"
              rel="noopener noreferrer"
              id="project-repo"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" /> .
            </a>
          </span>
        </div>
      </footer>
    );
  }
}
