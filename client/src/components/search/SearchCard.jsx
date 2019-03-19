import React from 'react';

const starImg = (rating) => {
  if(rating === 0) {
    return './images/yelp_stars/web/small/small_0.png';
  } else if (rating < 1.25) {
    return './images/yelp_stars/web/small/small_1.png';
  } else if (rating < 1.7) {
    return './images/yelp_stars/web/small/small_1_half.png';
  } else if (rating < 2.25) {
    return './images/yelp_stars/web/small/small_2.png';
  } else if (rating < 2.7) {
    return './images/yelp_stars/web/small/small_2_half.png';
  } else if (rating < 3.25) {
    return './images/yelp_stars/web/small/small_3.png';
  } else if (rating < 3.7) {
    return './images/yelp_stars/web/small/small_3_half.png';
  } else if (rating < 4.25) {
    return './images/yelp_stars/web/small/small_4.png';
  } else if (rating < 4.7) {
    return './images/yelp_stars/web/small/small_4_half.png';
  } else {
    return './images/yelp_stars/web/small/small_5.png';
  }
}

const SearchCard = props => {
  return (
    <div id="search-card" className="container">
      <div className="row search-card">
        <div className="col-sm search-pic">
          <img src={props.info.image_url} alt="cafe-picture"></img>
        </div>
        <div className="col-sm search-info">
          <h5>{props.info.name}</h5>
          <div className="rating-review">
            <img src={starImg(props.info.rating)} alt="rating" />
            <span className="rating">{props.info.review_count} Reviews</span>
          </div>
          <span>{props.info.display_phone}</span>
          <span>{props.info.location.address1}, {props.info.location.city}</span>
          
          <a href={props.info.url}><img className="yelp-logo" src="./images/yelp_logo/Screen(R)/Yelp_trademark_RGB.png" /></a>
        </div>
      </div>
    </div>
  )
}

export default SearchCard;
