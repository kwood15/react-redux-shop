const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/books', (req, res) => {
  res.send(require('./api/books'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
