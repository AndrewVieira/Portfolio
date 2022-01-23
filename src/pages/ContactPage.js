import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

function ContactPage () {
  return (
    <div className="ContactPage">
      <Container>
        <h1>Contact Form</h1>
        <ContactForm/>
      </Container>
    </div>
  );
}

export default ContactPage;
