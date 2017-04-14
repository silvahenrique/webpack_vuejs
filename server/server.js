const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/views/index.html'));
});

const server = app.listen(8000, () => {
  let port = server.address().port;
  console.log(`Server listening on PORT: ${port}.`);
});
