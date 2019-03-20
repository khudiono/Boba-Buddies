import React from 'react';
import SearchCard from './SearchCard';
import Map from './Map';

const SearchResults = props => {
  const props1 = props.info.slice(0,3);
  const props2 = props.info.slice(2);
  return (
    <div className="container search-results">
      <div className="row">
        <div className="col-sm">
          <div id="search-results">
            <h1>Search Results</h1>
            {props1.map(result => {
              return (<SearchCard key={result.id} info={result} add={props.add} />)
            })}
          </div>
        </div>
        <div className="col-sm search-results-2">
          <Map places={props.info}/>
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
