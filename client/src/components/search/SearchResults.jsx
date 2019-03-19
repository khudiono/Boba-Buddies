import React from 'react';
import SearchCard from './SearchCard';

const SearchResults = props => {
  const props1 = props.info.slice(0,2);
  const props2 = props.info.slice(2);
  return (
    <div className="container search-results">
      <div className="row">
        <div className="col-sm">
          <div id="search-results">
            <h1>Search Results</h1>
            {props1.map(result => {
              return (<SearchCard key={result.name} info={result} add={props.add} />)
            })}
          </div>
        </div>
        <div className="col-sm search-results-2">
          {props2.map(result => {
            return (<SearchCard key={result.name} info={result} add={props.add} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
