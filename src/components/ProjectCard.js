import { Row, Col, Card, Button } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <Card>
        <Row>
          <Col>
            <Card.Img variant="left" src={props.image}/>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <Button>Project Code Here!</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default ProjectCard;