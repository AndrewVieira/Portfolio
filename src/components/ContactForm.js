import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap';

function ContactForm () {
  const [state, handleSubmit] = useForm('mqknenay');
  if (state.succeeded) {
    return <p>Thanks you!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="name">
          Your Name
        </Form.Label>
        <Form.Control id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors}/>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">
          Email Address
        </Form.Label>
        <Form.Control id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control id="message" name="message" as="textarea" rows={3} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </Form.Group>
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
