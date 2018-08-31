import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'

const Thumbnail = ({ title, date}) => (
  <Row className="jcc mt5">
    <Col>
    <h3 className="white">{title}</h3>
    <h6 className="white">{date}</h6>
    </Col>
  </Row>
)

export default Thumbnail
