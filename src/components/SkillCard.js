import React from 'react';
import { Card } from 'react-bootstrap';

function SkillCard (props) {
  return (
    <div className="SkillCard">
      <Card class>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SkillCard;
