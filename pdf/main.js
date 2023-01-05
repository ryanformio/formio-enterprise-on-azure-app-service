const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello FROM PDF!');
});

app.listen(4005, () => {
  console.log('PDF server listening on port 4005');
});