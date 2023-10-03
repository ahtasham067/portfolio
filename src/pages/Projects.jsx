import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import awaazdy from "../assets/projects/awaazdy.png";
import buffyhub from "../assets/projects/buffyhub.png";
import autobuffy from "../assets/projects/autobuffy.png";
import krypto from "../assets/projects/krypto.png";
import oneshade from "../assets/projects/oneshade.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={autobuffy}
              isBlog={false}
              title="Auto Buffy"
              description="The AutoBuffy website functions as an E-commerce platform specializing in a diverse array of automotive spare parts and accessories. Here, customers can conveniently peruse the product catalog, choose the desired components, and proceed to make online orders. The platform collaborates with multiple vendors, offering a variety of payment options, including Stripe, PayPal, Afterpay, and Google Pay. AutoBuffy is constructed using Angular, Ruby On Rails (ROR), and utilizes a Postgres database."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={buffyhub}
              isBlog={false}
              title="Buffy Hub"
              description="The BuffyHub Inventory website is used to synchronize the inventory files from FTP and keep the main app https://autobuffy.com/ updated at all times. I have created this project using the following technologies. React, Ruby on Rails, Postgres. and deployed this app on AWS using Capistrano, and I have to use the following things on the server. EC2, RDS, S3 Bucket, Redis Cluster, Elastic cache, etc. this app is also deployed on AWS, a project management tool used Monday. com, for communication, use slack."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={awaazdy}
              isBlog={false}
              title="Research buddy"
              description="Research Buddy streamlines research for academics and researchers. It provides robust organization tools like tags, folders, and filters, simplifying document retrieval and online database searches. Notably, it automates citation and bibliography formatting in APA, MLA, and Chicago styles, saving time. Developed with React.js and Ruby on Rails, it employs Git, GitHub, Monday.com, and Slack for version control, project management, and team communication. Research Buddy is a versatile tool that enhances research workflows by offering organization, search capabilities, and automated citation support, powered by modern technologies and collaboration tools."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={oneshade}
              isBlog={false}
              title="Nizam-e-Taleem"
              description="Nizame-Taleem is a school management system designed to help educational institutions manage their day-to-day operations. One of the key features of Nizame-Taleem is its student information management module, which allows schools to store and manage student data and academic records. The module includes tools for tracking attendance, exam marks, and generating reports. I have created this app using the following technologies. React js, Bootstrap, and RoR. and for version control using git and Bitbucket, project management tool use Monday. com, for communication, use slack."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
