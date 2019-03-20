import React, { Component } from 'react';
import SearchResults from './SearchResults';
import NoResult from './NoResult';
import MapView from './Map';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      location: '',
      search: false,
      noresult: false,
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
        this.setState({ noresult: false, search: true})
      })
      .then(() => {
        this.setState({location: ''})
      })
      .catch( err => {
        if(err) {
          this.setState({ noresult : true})
        } else {
          console.log('ERROR', err);
        }
      })
  }

  render() {
    let results = this.state.search === true ? <SearchResults info={this.state.places} add={this.props.addFavorite}/> : null;
    let noResults = this.state.noResult === true ? <NoResult location={this.state.location}/> : null;
    return (
      <div id="search">
        <h2>Search for boba</h2>
        <div className="search-bar">
          <input placeholder="Type a location" value={this.state.location} onChange={this.updateSearch}/>
          <i className="fas fa-search" onClick={this.handleSearch}></i>
        </div>
        {noResults}
        {results}
      </div>
    )
  }
}

export default Search;
