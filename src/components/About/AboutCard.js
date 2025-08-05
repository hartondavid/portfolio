import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red" style={{ fontWeight: "bold" }}>David Harton </span>
            from <span className="red" style={{ fontWeight: "bold" }}> Bucharest, Romania.</span>
            <br />
            <br />
            The last job I had was as a software developer at <span className="red" style={{ fontWeight: "bold" }}>Magic Salon.</span>
            <br />
            <br />
            I am currently searching for a job as a software developer.
            <br />
            <br />
            I have completed a Bachelor's degree in Computer Science at <span className="red" style={{ fontWeight: "bold" }}>Bucharest University of Economic Studies.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "#e6453a", fontWeight: "bold" }}>
            "And we know that in all things God works for the good of those who love him, who have been called according to his purpose"{" "}
          </p>
          <footer className="blockquote-footer" style={{ fontWeight: "bold" }}>Romans 8:28</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
