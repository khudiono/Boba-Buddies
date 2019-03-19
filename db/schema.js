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

module.exports.Favorite = mongoose.model('Favorite', favoriteSchema);
