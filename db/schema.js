const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  favorites: {type: Array, default: []}
})

const businessSchema = new mongoose.Schema({
  id: {type: Number, require: true, unique: true, index:true},
  name: {type: String, require: true},
  image_url:String,
  url: String,
  review_count: Number,
  address: String,
  city: String,
  state: String,
  phone: String,
  coordinates: String,
  rating: Number,
  title: {type: Number, require: true}
})

module.exports.Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports.Business = mongoose.model('Business', businessSchema);
