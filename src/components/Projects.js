import React from 'react';
import { Col } from 'reactstrap'
import Thumbnail from './Thumbnail'
import ColumnHeader from './ColumnHeader'
import projects from '../posts/projects.json'


const Projects = () => {
  return (
    <Col>
        <ColumnHeader title="code" subtitle="entirely about software engineering" link="/projects"/>
        {Object.keys(projects).map(key =>
          <Thumbnail key={key} title={projects[key].title} subtitle={projects[key].subtitle} link={`/projects/${key}`}/>)}
    </Col>
  )
}

export default Projects
