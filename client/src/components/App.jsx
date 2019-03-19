import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Search from './search/Search';
import Featured from './Featured';
import Nav from './Nav';
import axios from 'axios';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ParallaxProvider>
          <Nav />
          <Home />
          <About />
          <Search />
        </ParallaxProvider>
      </div>
    )
  }
}

export default App;
