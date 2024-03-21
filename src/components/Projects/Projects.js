import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import truebalance from "../../Assets/Projects/truebalance.png";
import beergang from "../../Assets/Projects/beergang.png";
import zipdata from '../../Assets/Projects/zipdata.png'
import zipbiseo from '../../Assets/Projects/zipbiseo.png'
import crm from "../../Assets/Projects/CRM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked previously.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truebalance}
              isBlog={false}
              title="TrueBalance"
              description="Instant Cash Loan service in India for non-online payment users, and non-credit score users. Webview inside android application using React"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.balancehero.truebalance&source_caller=ui&shortlink=WebHome&c=Website-TB-Cashloan-7Jul21-HomePage&pid=WebHomePage&deep_link_value=cashloan.status&af_click_lookback=7d&af_channel=Website-TB-Cashloan-7Jul21-HomePage&af_adset=Website-TB-Cashloan-7Jul21-HomePage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beergang}
              isBlog={false}
              title="GoodGangLabs"
              description="Homepage for introducing GoodGang labs company using React with tailwindcss"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://goodganglabs.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zipdata}
              isBlog={false}
              title="Zipdata"
              description="Data platform for real estate analyze. Complex average price comparison, comparison of nearby complexes, KB price, actual transaction price and market price difference, etc.
Provides all functions and services necessary for collateral review using React"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zipbiseo}
              isBlog={false}
              title="Zipbiseo"
              description="In-app linked to AI speakers and TVs for real estate information and analysis. Also developed as a external mobile web service."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://blog.naver.com/zipadvisor/221743575098"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="CRM"
              description="CRM for company product management and customer management using Next.js"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
