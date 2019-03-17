const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(__dirname + '/../public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;
