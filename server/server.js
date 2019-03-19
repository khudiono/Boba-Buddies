const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const apiKey = require('../config.js').YelpApiKey;
const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);
const db = require('../db/index.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/search', (req,res) => {
  let url = 'https://api.yelp.com/v3/businesses/search';
  let params = {
    term: 'bubble tea',
    location: req.query.location,
    limit: 4,
  }
  client.search(params).then( response => {
    return response.jsonBody.businesses;
  })
  .then(results => {
    res.status(200).send(results);
  })
  .then(() => {
    res.end();
  })
  .catch(err => {
    res.status(500).send(err);
    res.end();
  })
})

app.route('/favorites')
  .get((req,res) => {
    db.getFavorites( (favorites) => {
      res.send(favorites);
      res.end();
    })
  })
  .delete((req,res) => {
    db.deleteFavorite(req.body.id, (err, result) => {
      if(err) {
        console.log(err);
      }else {
        res.status(200).send('deleted');
        res.end();
      }
    })
  })
  .post((req,res) => {
    db.saveFavorite(req.body, (err, result) => {
      if(err) {
        console.log(err)
      } else {
        res.status(201).send('posted')
        res.end();
      }
    });
  })

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;
