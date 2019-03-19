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

const Featured = props => {
  return (
    <div id="featured">
      <h1>Featured Boba Place</h1>
      <div className="row featured-card">
        <div className="col-sm featured-pic">
          <img src="https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg" alt="cafe-picture"></img>
        </div>
        <div className="col-sm featured-info">
          <h5>Gary Danko</h5>
          <div className="rating-review">
            <img src={starImg(4.8)} alt="rating"></img>
            <span className="rating">  108 Reviews</span>
          </div>
          <span>(410) 283-2341</span>
          <span>123 Brookhurst Ave, Garden Grove </span>
        </div>
      </div>
    </div>
  )
}

export default Featured;
