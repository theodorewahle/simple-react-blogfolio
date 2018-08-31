import React from 'react'
import { Container, Row, Col} from 'reactstrap'

const BlogPage = ({ blog }) => (
  <Container className="pv3">
  <Col>
    <h1 className="f-headline white">{blog.title}</h1>
    <h1 className="white mb6">{blog.subtitle}</h1>
    {blog.text.map(line => {
      return <p className="white f4">{line}</p>
    })

    }

  </Col>
  </Container>
)

export default BlogPage
