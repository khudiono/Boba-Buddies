const mongoose = require('mongoose');
const Favorite = require('./schema.js').Favorite;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bobabuddies' , (err, result) => {
  if(err) {
    console.log('ERROR: ', err);
  } else {
    console.log('Successfully conneted to Mongo!')
  }
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
