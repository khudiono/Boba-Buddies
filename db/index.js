const mongoose = require('mongoose');
const Favorite = require('./schema.js').Favorite;
const db = process.env.MONGODB_URI || 'mongodb://localhost/bobabuddies';

mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfuly connected to Mongo')
  })
  .catch( err => {
    console.log('ERROR: ', err)
  })

let saveFavorite = (business, cb) => {
  var newFavorite = new Favorite (business);
  newFavorite.save((err, data) => {
    if(err) {
      console.log(err);
    } else {
      cb(null, 'Successfully added')
    }
  })
}

let deleteFavorite = (id, cb) => {
  Favorite.findOneAndDelete({id: id}).exec((err,data) => {
    if(err){
      console.log(err)
    }else {
      cb(null, 'Successfully deleted')
    }
  })
}

let getFavorites = (cb) => {
  Favorite.find().exec((err, favorites) => {
    if(err) {
      console.log(err)
    } else {
      cb(favorites);
    }
  })
}

module.exports.saveFavorite = saveFavorite;
module.exports.deleteFavorite = deleteFavorite;
module.exports.getFavorites = getFavorites;
