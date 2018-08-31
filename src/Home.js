import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import { SocialIcon } from 'react-social-icons';
import Blog from './components/Blog'
import Projects from './components/Projects'


class Home extends Component {
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <Container >
          <Row>
            <Col className="aic">
      <h1 className="white f-headline">teddy wahle</h1>
            </Col>
      </Row>
          <Row >
            <Blog />
            <Projects />
          </Row>
          <Row className="pt6 pb3">
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
    background: 'linear-gradient(135deg, #1e69de 1%,#f99159 51%,#1e69de 99%)'
  }
}

export default Home;
