import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import NotReadyYetPage from './pages/NotReadyYetPage';
import NeverForgottenPage from './pages/projects/NeverForgottenPage';
import ContentBlock from './components/ContentBlock';

import logo from './assets/vectors/klyn-logo.svg';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-logo">
            <img src={logo} alt="logo" />
          </Link>
          <span className="App-tagline">not about money</span>
          <ul className="App-menu no-list-style">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <div className="App-content">
          <Switch>
            <Route path="/projects/never-forgotten">
              <NeverForgottenPage />
            </Route>
            <Route path="/contact">
              <NotReadyYetPage />
            </Route>
            <Route path="/about">
              <NotReadyYetPage />
            </Route>
            <Route path="/products">
              <NotReadyYetPage />
            </Route>
            <Route path="/projects">
              <NotReadyYetPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <div className="App-footer">
          <ContentBlock theme='light'>
            <div className="no-tracking-notice">
              Hey! You are <b>not</b> being tracked. This website does <b>not</b> use cookies or any other form of tracking or information gathering technique for any commercial, non-commercial, analytics or research purposes. Just so you know!
            </div>
          </ContentBlock>
          <ContentBlock theme='dark'>
            Copyright &copy; {new Date().getFullYear()} KLYN LTD
          </ContentBlock>
        </div>
      </div>
    </Router>
  );
}

export default App;
