import React from 'react';
import { Col, Row } from 'reactstrap'
import Thumbnail from './Thumbnail'
import ColumnHeader from './ColumnHeader'

const Portfolio = () => {
  return (
    <Col>
        <ColumnHeader title="code" subtitle="entirely about software engineering"/>
        <Thumbnail title="priority box" date="August 2018"/>
        <Thumbnail title="hot button twitter search" date="August 2018"/>
        <Thumbnail title="don't teach low level programming first, obviously" date="August 2018"/>
    </Col>
  )
}

export default Portfolio
