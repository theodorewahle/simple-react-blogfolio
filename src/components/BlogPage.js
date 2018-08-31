import React from 'react'
import { Container, Row, Col} from 'reactstrap'

const BlogPage = ({ blog }) => (
  <Container className="pv3">
  <Col>
    <h1 className="f-headline white">{blog.title}</h1>
    <h3 className="white">{blog.subtitle}</h3>
    <p className="white">{blog.text}</p>
  </Col>
  </Container>
)

export default BlogPage
