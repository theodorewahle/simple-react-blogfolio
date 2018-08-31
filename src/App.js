import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Col, Row } from 'reactstrap'
import headshot from './assets/headshot.JPG'
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <Container >

          <Row className="pt2">
            <Col className="aic">
              <h1 style={{ color: 'white', fontSize: 64}}>teddy wahle</h1>
              <h3 style={{ color: 'white', fontSize: 32}}>full-stack software engineer</h3>
            </Col>
          </Row>

          <Row className="mt5">

          <Col >
            <Row>
              <Col>
              <h1 className="white">writing</h1>
              <h5 style={{ color: 'white'}}>mostly about software engineering</h5>
            </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title one</h3>
              <h6>August 2018</h6>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title two</h3>
              <h6>July 2018</h6>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title three</h3>
              <h6>June 2018</h6>
              </Col>
            </Row>
          </Col>

          <Col >
            <Row>
              <Col>
              <h1 style={{ color: 'white'}}>coding</h1>
              <h5 style={{ color: 'white'}}>entirely about software engineering</h5>
            </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title one</h3>
              <h6>August 2018</h6>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title two</h3>
              <h6>July 2018</h6>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '3em'}}>
              <Col>
              <h3>article title three</h3>
              <h6>June 2018</h6>
              </Col>
            </Row>
          </Col>

          </Row>
          <Row className="mt5 pb3">
            <SocialIcon style={{ marginRight: 8}} url="http://twitter.com/teddywahle" color="white"/>
            <SocialIcon url="https://www.linkedin.com/in/teddy-wahle/" color="white"/>
            <SocialIcon style={{ marginLeft: 8}} url="https://github.com/theodorewahle" color="white"/>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  appStyle: {
    minHeight: '100vh',
    minWidth: '100vw',
    maxWidth: '100%',
    background: 'linear-gradient(to right, red, blue)'
  }
}

export default App;
