import React from 'react';

const NoResult = props => {
  return (
    <div id="no-result">
      <h4>No results for {props.location} <img src="./images/sad.png" className="sad-panda"></img></h4>
    </div>
  )
}

export default NoResult;
