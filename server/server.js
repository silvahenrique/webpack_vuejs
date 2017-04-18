const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('views', path.resolve(__dirname, '../client/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/static', express.static(path.resolve(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  var content = fs.readFileSync(
    path.join(__dirname, '../client/public/manifest.json')
  );

  content = JSON.parse(content);

  res.render('index', {
    title: 'My Vue App',
    bundle_js: "/static/js/" + content.app[0],
    bundle_css: "/static/js/" + content.app[1]
  });
});

const server = app.listen(8000, () => {
  let port = server.address().port;
  console.log(`Server listening on PORT: ${port}.`);
});
