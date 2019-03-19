import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = props => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <Parallax x={[-8, 8]}>
            <div className="col-sm">
              <img src="../images/drinking.png" alt="drinking-boba"></img>
            </div>
          </Parallax>
          <div className="col-sm about-text">
            <Parallax x={[8, -8]}>
              <h2>Let's be buddies!</h2>
              <p> Finding good boba places shouldn't be hard. Boba buddies helps
              you find and share boba places wherever you are! Start by typing a
              location of your choice. Search is powered by Yelp API.</p>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
