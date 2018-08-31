import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import blogPosts from '../posts/blogs.json'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({ title, posts}) => {
  return (
  <Container>
    <h1>{title}</h1>
    <Col>
    {Object.keys(blogPosts).map(key =>
      <Thumbnail key={key} title={posts[key].title} date={posts[key].date}/>)}
    </Col>
  </Container>
)}

export default ThumbnailGrid
