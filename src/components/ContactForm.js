import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Stack, Form, Button } from 'react-bootstrap';

function ContactForm () {
  const [state, handleSubmit] = useForm('mqknenay');
  if (state.succeeded) {
    return <h1 className="submit-success item-fadein">Thank You!</h1>;
  }
  return (
    <Form className="item-fadeout" onSubmit={handleSubmit}>
      <Stack gap={1}>
        <Form.Group>
          <Form.Label htmlFor="name">
            Your Name
          </Form.Label>
          <Form.Control id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors}/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">
            Your Email
          </Form.Label>
          <Form.Control id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control id="message" name="message" as="textarea" rows={3} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Form.Group>
        <Button className="w-100" size="lg" type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </Stack>
    </Form>
  );
}

export default ContactForm;
