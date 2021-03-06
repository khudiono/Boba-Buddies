import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Search from './search/Search';
import Nav from './Nav';
import Map from './search/Map';
import axios from 'axios';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }

    this.addFavorite = this.addFavorite.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  componentDidMount() {
    this.getFavorites()
  }

  getFavorites() {
    axios.get('/graphql?query={favorites{name,id,url}}')
      .then( favorites => {
        console.log(favorites.data.data.favorites)
        this.setState({ favorites: favorites.data.data.favorites})
      })
      .catch( err => {
        console.log('ERROR: ', err);
      })
  }

  addFavorite (info) {
    axios.post('/favorites', info)
      .then( response => {
        this.getFavorites();
      })
      .catch( err => {
        console.log(err);
      })
  }

  removeFavorite(id) {
    axios.delete('/favorites', {data: {id: id}})
      .then( result => {
        this.getFavorites();
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <ParallaxProvider>
          <Nav favorites={this.state.favorites} delete={this.removeFavorite}/>
          <Home />
          <About />
          <Search addFavorite={this.addFavorite}/>
        </ParallaxProvider>
      </div>
    )
  }
}

export default App;
