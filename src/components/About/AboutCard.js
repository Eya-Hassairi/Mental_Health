import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Mental health is just as important as physical health. It is crucial to take care of our emotional and psychological well-being. 
            Regular self-assessments can help us understand our mental state, recognize signs of stress or depression, 
            and take steps to improve our quality of life. 
            That’s why we encourage you to complete this questionnaire and reflect on your own well-being. 
            By becoming more aware of your mental health, you can make informed choices to take better care of yourself.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Focus on well-being
            </li>
            <li className="about-activity">
              <ImPointRight /> Identify signs of stress
            </li>
            <li className="about-activity">
              <ImPointRight /> Take care of yourself
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Self-assessment is the first step towards better well-being!"{" "}
          </p>
          <footer className="blockquote-footer">The Team</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
