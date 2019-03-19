const express = require('express');
const cors = require('cors');
const app = express();
const apiKey = require('../config.js').YelpApiKey;
const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);

app.use(cors());

app.use(express.static(__dirname + '/../public'));

app.get('/search', (req,res) => {
  console.log('body', req.query.location)
  let url = 'https://api.yelp.com/v3/businesses/search';
  let params = {
    term: 'bubble tea',
    location: req.query.location,
    limit: 3,
  }
  client.search(params).then( response => {
    return response.jsonBody.businesses;
  })
  .then(results => {
    res.status(200).send(results);
  })
  .catch(err => {
    res.status(500).send(err);
  })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;
