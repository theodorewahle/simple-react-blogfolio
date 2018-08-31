import React from 'react'
import { Row, Col } from 'reactstrap'
import {
  Link
} from 'react-router-dom'

export const ColumnHeader = ({ title, subtitle, link}) => (
  <Row>
    <Col>
      <Link to="/blog"><h1 className="white f-subheadline pb0 mb0">{title}</h1></Link>
    <h5 className="white">{subtitle}</h5>
    </Col>
  </Row>
)
export default ColumnHeader
