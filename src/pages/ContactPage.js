import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

function ContactPage () {
  return (
    <div className="ContactPage">
      <Container>
        <h1 className="mx-auto">Contact Form</h1>
        <Row>
          <Col>
          </Col>
          <Col xs={9} sm={7} md={5}>
            <ContactForm/>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
