import React from "react";
import { Container, Row, Col } from "reactstrap";

const SupportPage = ({ project }) => (
  <Container className="pv3">
    <Col>
      <Row>
        <Col>
          <h1 className="f-headline white">Support</h1>
          <div>
            <p>
              {" "}
              Theodore Wahle built the Priority Box app as a Free app. This
              SERVICE is provided by Theodore Wahle at no cost and is intended
              for use as is.
            </p>
            <p>
              Theodore Wahle will provide support, free of charge, to users of
              this app, as long as the issues raised during support claims are
              related directly to the functionality of the Priority Box mobile
              app.
            </p>
            <p>
              <strong>Contact Us</strong>
            </p>
            <p>
              If you have any questions or suggestions about my this app, do not
              hesitate to contact me at <strong>theodorewahle@gmail.com</strong>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Container>
);

export default SupportPage;
