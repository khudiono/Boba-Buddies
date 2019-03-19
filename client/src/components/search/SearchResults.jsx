import React from 'react';
import SearchCard from './SearchCard';

const SearchResults = props => {
  return (
    <div className="container search-results">
      <div className="row">
        <div className="col-sm">
          <div id="search-results">
            <h1>Search Results</h1>
            {props.info.map(result => {
              return (<SearchCard key={result.name} info={result} />)
            })}
          </div>
        </div>
        <div className="col-sm">
          <span>This will be a map</span>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
