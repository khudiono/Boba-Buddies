const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  id: {type: String, require: true, unique: true, index:true},
  name: {type: String, require: true},
  image_url:String,
  url: String,
  review_count: Number,
  display_phone: String,
  location: Object,
  coordinates: Object,
  rating: Number,
})

const businessSchema = new mongoose.Schema({
  id: {type: Number, require: true, unique: true, index:true},
  name: {type: String, require: true},
  image_url:String,
  url: String,
  review_count: Number,
  display_phone: String,
  location: Object,
  coordinates: Object,
  rating: Number,
  title: {type: Number, require: true}
})

module.exports.Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports.Business = mongoose.model('Business', businessSchema);
