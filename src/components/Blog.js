import React from 'react';
import { Col } from 'reactstrap'
import Thumbnail from './Thumbnail'
import ColumnHeader from './ColumnHeader'
import blogPosts from '../posts/blogs.json'


const Blog = () => {
  return (
    <Col>
        <ColumnHeader title="writing" subtitle="mostly about software engineering" link="/blog"/>
        {Object.keys(blogPosts).map(key =>
          <Thumbnail key={key} title={blogPosts[key].title} subtitle={blogPosts[key].subtitle} link={`/blog/${key}`}/>)}
  
    </Col>
  )
}

export default Blog
