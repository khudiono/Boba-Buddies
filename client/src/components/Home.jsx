import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Home = props => {
  return (
    <div id="home">
      <Parallax x={[20, -20]}>
        <div id="home-title">
          <h1>BOBA BUDDIES</h1>
          <span className="home-text">Life is better with boba</span>
        </div>
      </Parallax>
      <Parallax x={[-30, 30]}>
          <img id="logo" src="../images/boba.png" alt="boba-buddies"></img>
      </Parallax>
      <Parallax y={[-20, 50]} x={[-10, 10]}>
          <img id="logo-2" src="../images/boba.png" alt="boba-buddies"></img>
      </Parallax>
    </div>
  )
}

export default Home
