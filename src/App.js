import React, { Component } from "react";
import ThumbnailGrid from "./components/ThumbnailGrid";
import blogPosts from "./posts/blogs";
import projects from "./posts/projects.json";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import BlogPage from "./components/BlogPage";
import ProjectPage from "./components/ProjectPage";
import SupportPage from "./components/SupportPage";
import PrivacyPage from "./components/PrivacyPage";

class App extends Component {
  thumb = () => {
    return <ThumbnailGrid title="blog" posts={blogPosts} />;
  };
  proj = () => {
    return <ThumbnailGrid title="projects" posts={projects} />;
  };

  blog = blog => <BlogPage blog={blog} />;
  project = (project, id) => <ProjectPage id={id} project={project} />;
  render() {
    return (
      <div className="App" style={styles.appStyle}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={this.thumb} />
            <Route exact path="/projects" component={this.proj} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/privacy" component={PrivacyPage} />

            {Object.keys(blogPosts).map(id => (
              <Route
                exact
                path={`/blog/${id}`}
                component={() => this.blog(blogPosts[id])}
              />
            ))}
            {Object.keys(projects).map(id => (
              <Route
                exact
                path={`/projects/${id}`}
                component={() => this.project(projects[id], id)}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

const styles = {
  appStyle: {
    minHeight: "100vh",
    minWidth: "100vw",
    maxWidth: "100%",
    background: "linear-gradient(135deg, #1e69de 1%,#f99159 51%,#1e69de 99%)"
  }
};

export default App;
