const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(8000, () => {
  console.log('Server listening on port 8000.');
});
