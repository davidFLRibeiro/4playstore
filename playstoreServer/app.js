const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(morgan('common'));
const apps = require('./playstore-data.js');
app.get('/apps', (req, res) => {
  const { search = '', sort } = req.query;
  if (sort) {
    if (!['Rating', 'App'].includes(sort)) {
      return res.status(400).send('sort it');
    }
  }

  let results = apps.filter(app =>
    app.Genres.toLowerCase().includes(search.toLowerCase())
  );

  if (sort) {
    results.sort((a, b) => {
      return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }

  res.json(results);
});

app.listen(1000, () => {
  console.log('express on port 1000');
});
