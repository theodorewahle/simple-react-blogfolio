import React from 'react';
import { Col, Row } from 'reactstrap'
import Thumbnail from './Thumbnail'
import ColumnHeader from './ColumnHeader'
import blogPosts from '../posts/blogs.json'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Blog = () => {
  return (
    <Col>
        <ColumnHeader title="writing" subtitle="mostly about software engineering" link="/blog"/>
        {Object.keys(blogPosts).map(key =>
          <Thumbnail key={key} title={blogPosts[key].title} date={blogPosts[key].date}/>)}
    </Col>
  )
}

export default Blog
