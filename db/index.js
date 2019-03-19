const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bobabuddies' , (err, result) => {
  if(err) {
    console.log('ERROR: ', err);
  } else {
    console.log('Successfully conneted to Mongo!')
  }
})
