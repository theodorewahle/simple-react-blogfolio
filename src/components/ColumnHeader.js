import React from 'react'
import { Row, Col } from 'reactstrap'

export const ColumnHeader = ({ title, subtitle}) => (
  <Row>
    <Col>
      <h1 className="white f-subheadline pb0 mb0">{title}</h1>
    <h5 className="white">{subtitle}</h5>
    </Col>
  </Row>
)
export default ColumnHeader
