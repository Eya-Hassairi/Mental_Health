import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function About() {
  const [formData, setFormData] = useState({
    interest: 0,
    depression: 0,
    sleepProblems: 0,
    fatigue: 0,
    appetite: 0,
    selfEsteem: 0,
    concentration: 0,
    movement: 0,
    suicidalThoughts: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can handle the form submission (e.g., save to database, send email)
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Self-Assessment Questionnaire</h2>
          <Form onSubmit={handleSubmit}>
            {/* Question 1 */}
            <Form.Group controlId="interest">
              <Form.Label className="text-white">Little interest or pleasure in doing things?</Form.Label>
              <Form.Control as="select" name="interest" value={formData.interest} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 2 */}
            <Form.Group controlId="depression">
              <Form.Label className="text-white">Feeling down, depressed, or hopeless?</Form.Label>
              <Form.Control as="select" name="depression" value={formData.depression} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 3 */}
            <Form.Group controlId="sleepProblems">
              <Form.Label className="text-white">Difficulty falling or staying asleep, or sleeping too much?</Form.Label>
              <Form.Control as="select" name="sleepProblems" value={formData.sleepProblems} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 4 */}
            <Form.Group controlId="fatigue">
              <Form.Label className="text-white">Feeling tired or having little energy?</Form.Label>
              <Form.Control as="select" name="fatigue" value={formData.fatigue} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 5 */}
            <Form.Group controlId="appetite">
              <Form.Label className="text-white">Appetite or overeating issues?</Form.Label>
              <Form.Control as="select" name="appetite" value={formData.appetite} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 6 */}
            <Form.Group controlId="selfEsteem">
              <Form.Label className="text-white">Feeling bad about yourself, or that you are a failure or have let yourself or your family down?</Form.Label>
              <Form.Control as="select" name="selfEsteem" value={formData.selfEsteem} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 7 */}
            <Form.Group controlId="concentration">
              <Form.Label className="text-white">Difficulty concentrating on things, like reading the newspaper or watching television?</Form.Label>
              <Form.Control as="select" name="concentration" value={formData.concentration} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 8 */}
            <Form.Group controlId="movement">
              <Form.Label className="text-white">Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you are moving around more than usual?</Form.Label>
              <Form.Control as="select" name="movement" value={formData.movement} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            {/* Question 9 */}
            <Form.Group controlId="suicidalThoughts">
              <Form.Label className="text-white">Thoughts that you would be better off dead, or thoughts of harming yourself in some way?</Form.Label>
              <Form.Control as="select" name="suicidalThoughts" value={formData.suicidalThoughts} onChange={handleChange}>
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default About;