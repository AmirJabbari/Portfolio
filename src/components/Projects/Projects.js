import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import spotify from "../../Assets/Projects/spotify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import checkit from "../../Assets/Projects/checkit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={checkit}
              isBlog={false}
              title="Ckeckit"
              description="I have built an application and its name is Checkit and it askes some question from patient and then It gives an answer from doctor to patient by AI."
              link="https://github.com/Checkit2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Connection"
              description="this project is for Sample to connect to Spotify and you can play songs, playlists, and ..."
              link="https://github.com/AmirJabbari/SpotifyConnection"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
