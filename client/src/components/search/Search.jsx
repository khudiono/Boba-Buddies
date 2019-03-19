import React, { Component } from 'react';
import SearchResults from './SearchResults';
import MapView from './Map';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [{name: 'Happy Lemon', rating: 4.1}, {name: '7 Leaves', rating: 3.5}, {name: 'Milk Sud', rating: 4.5}],
      location: '',
      search: false,
      info: [],
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({ location: e.target.value })
  }

  handleSearch(){
    axios.get('/search', { params: { location : this.state.location }})
      .then( places => {
        this.setState({ places: places.data })
      })
      .then(() => {
        console.log('places', this.state.places)
        this.setState({ search: true})
      })
      .then(() => {
        this.setState({location: ''})
      })
      .catch( err => {
        console.log('ERROR', err);
      })
  }

  render() {
    let results = this.state.search === true ? <SearchResults info={this.state.places} /> : null;
    return (
      <div id="search">
        <h2>Find your boba!</h2>
        <div className="search-bar">
          <input placeholder="Type a location" value={this.state.location} onChange={this.updateSearch}/>
          <i className="fas fa-search" onClick={this.handleSearch}></i>
        </div>
        {results}
      </div>
    )
  }
}

export default Search;
