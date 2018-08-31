import React from 'react';
import { Col, Row } from 'reactstrap'
import {
  Link
} from 'react-router-dom'

const Thumbnail = ({ title, subtitle, link}) => (
  <Row className="jcc mt5">
    <Col>
    <Link to={link}>
    <h3 className="white">{title}</h3>
    </Link>
    <h6 className="white">{subtitle}</h6>
    </Col>
  </Row>
)

export default Thumbnail
