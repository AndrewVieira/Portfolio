import React from 'react';
import { Row, Container } from 'react-bootstrap';

function SkillsPage () {
  return (
    <div className="ResumePage">
      <Container>
        <h1>Skills Page</h1>
        <Row>
          <a href="resume.pdf" width="100%" height="800px">Resume Download</a>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsPage;
