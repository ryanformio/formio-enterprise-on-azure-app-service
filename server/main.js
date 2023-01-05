const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from API Server!');
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});