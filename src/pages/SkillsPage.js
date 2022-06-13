import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import SkillCard from '../components/SkillCard';

function SkillsPage () {
  return (
    <div className="SkillsPage">
      <Container>
        <h1>Skills</h1>
        <Row>
          <Col>
            <SkillCard title="Languages" text="Javascript, C/C++, Python"/>
            <SkillCard title="Web Technologies" text="HTML, CSS, Bootstrap, ReactJS"/>
          </Col>
          <Col>
            <SkillCard title="Operating Systems" text="Windows, Linux"/>
            <SkillCard title="Other Technologies" text="PostgreSQL, Git"/>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
        </Row>
        <a href="resume.pdf" width="100%" height="800px">Resume Download</a>
      </Container>
    </div>
  );
}

export default SkillsPage;
