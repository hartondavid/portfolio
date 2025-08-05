import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduPlatform from "../../Assets/Projects/edu-platform.png";
import delivery from "../../Assets/Projects/delivery.png";
import saleRoom from "../../Assets/Projects/sale-room.png";
import medicalBooking from "../../Assets/Projects/medical-booking.png";
import libraryLoan from "../../Assets/Projects/library-loan.png";
import sweetBooking from "../../Assets/Projects/sweet-booking.png";
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="red">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduPlatform}
              isBlog={false}
              title="Education Platform"
              description="This is a school management system that helps schools organize and manage their daily operations digitally. Think of it as the 'brain' behind a school's computer system that handles all the important data and processes."
              ghLink="https://github.com/hartondavid/edu-platform-frontend"
              demoLink="https://eduplatform.davidharton.online"
            >
            </ProjectCard>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Management System"
              description="This is a digital system that helps restaurants manage their daily operations. Think of it as the 'brain' behind a restaurant's digital operations."
              ghLink="https://github.com/hartondavid/restaurant-frontend"
              demoLink="https://restaurant.davidharton.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sweetBooking}
              isBlog={false}
              title="Cake Management System"
              description="A web-based application that helps cake shops and bakeries manage their business operations. Think of it as a digital assistant for cake businesses."
              ghLink="https://github.com/hartondavid/sweet-booking-frontend"
              demoLink="https://sweetbooking.davidharton.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libraryLoan}
              isBlog={false}
              title="Library Loan Management System"
              description="This is a digital library management application that helps librarians and students manage their book collection and loan services more efficiently."
              ghLink="https://github.com/hartondavid/library-loan-frontend"
              demoLink="https://libraryloan.davidharton.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalBooking}
              isBlog={false}
              title="Medical Booking System"
              description="This is a digital platform that helps manage medical appointments and healthcare services. Think of it as the 'behind-the-scenes' system that powers a medical booking website or app."
              ghLink="https://github.com/hartondavid/medical-booking-frontend"
              demoLink="https://medicalbooking.davidharton.online"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saleRoom}
              isBlog={false}
              title="Online Auction Platform"
              description="This project is a modern online auction website where people can buy and sell items through live bidding. Think of it like eBay, but with real-time auctions where users can place bids and watch prices go up in real-time."
              ghLink="https://github.com/hartondavid/sale-room-frontend"
              demoLink="https://saleroom.davidharton.online"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={delivery}
              isBlog={false}
              title="Delivery Management System"
              description="This is a delivery management system that helps businesses organize and track their delivery operations. 
              Think of it as a digital system that connects business owners/administrators with couriers/delivery drivers."
              ghLink="https://github.com/hartondavid/delivery-frontend"
              demoLink="https://delivery.davidharton.online"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
