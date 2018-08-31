import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
import headshot from './assets/headshot.JPG'
import { SocialIcon } from 'react-social-icons';
import ThumbnailGrid from './components/ThumbnailGrid'
import blogPosts from './posts/blogs.json'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'

class App extends Component {
  thumb = () => {
    return <ThumbnailGrid posts={blogPosts}/>
  }
  render() {
    return (
        <div className="App" style={styles.appStyle}>
          <Router>
              <div>
              <Route exact path="/" component={Home}/>
              <Route path="/blog" component={this.thumb}/>
              </div>
          </Router>
        </div>
        )
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

export default App;
