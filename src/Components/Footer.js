import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Ekam-Preet-Singh/Code-Editor"
          className="f"
        >
          <span>
            <i class="fab fa-github"></i>
          </span>{" "}
          github
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ekam-preet-singh-250595205/"
          className="f"
        >
          <span>
            <i class="fab fa-linkedin"></i>
          </span>{" "}
          linkedin
        </a>
        <div>Copywrite © {year}</div>
        <div>
          created by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ekam-Preet-Singh"
            className="f"
          >
            @ekam_preet_singh
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
