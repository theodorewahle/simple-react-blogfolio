import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

const ProjectPage = ({ project }) => (
  <Container className="pv3">
  <Col>
  <Row>
  <Col>
    <h1 className="f-headline white">{project.title}</h1>
    <h1 className="white">{project.subtitle}</h1>
    <p className="white">{project.text}</p>
    </Col>
    </Row>
    <Row className="pt6" style={{justifyContent: "flex-end"}}><h5 className="white pl3 pr2 pt2">see this project on</h5>
    <SocialIcon url={`https://github.com/theodorewahle/${project.repo}`} color="white"/>
    </Row>
  </Col>
  </Container>
)

export default ProjectPage
