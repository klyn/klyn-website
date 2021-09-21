import React from 'react';
import { Link } from 'react-router-dom';

import ContentBlock from '../components/ContentBlock';
import "../assets/styles/pages/HomePage.css";

let HomePage = () => (
  <ContentBlock theme='light'>
    <div className="highlight">
      <b>Under Construction:</b> This website is still under active development. Please come back in a couple of weeks for more content!
    </div>
    <h3>Most Recent</h3>
    <div className="showcase">
      <div className="showcase-element">
        <Link to="/projects/never-forgotten">
          <div className="showcase-element-photo never-forgotten-showcase-cover">
            <span>Never Forgotten</span>
          </div>
        </Link>
      </div>
      <div className="showcase-element">
        second el
      </div>
      <div className="showcase-element">
        third el
      </div>
      <div className="showcase-element">
        fourth el
      </div>
      <div className="showcase-element">
        fifth el
      </div>
    </div>
  </ContentBlock>
);

export default HomePage;
