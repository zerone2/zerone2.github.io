import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            전) 소프트웨어 마에스트로 9기<br/>
            전) 광운대학교 컵퓨터소프트웨어 졸업<br/>
            전) Zipfund 재직<br/>
            현) 밸런스히어로 재직중<br/>
          </p>
          {/*<ul>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Playing Games*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Writing Tech Blogs*/}
          {/*  </li>*/}
          {/*  <li className="about-activity">*/}
          {/*    <ImPointRight /> Travelling*/}
          {/*  </li>*/}
          {/*</ul>*/}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/*<footer className="blockquote-footer">Zer01ne</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
