import React from 'react'
import { Container, Col } from 'reactstrap'
import blogPosts from '../posts/blogs'
import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({ title, posts}) => {
  return (
  <Container className="pv3">
    <h1 className="f-headline white pl2">{title}</h1>
    <Col>
    {Object.keys(blogPosts).map(key =>
    <Thumbnail key={key} title={posts[key].title} subtitle={posts[key].subtitle} link={`/${title}/${key}`}/>)}
    </Col>
  </Container>
)}

export default ThumbnailGrid
