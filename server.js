const db = require('./db');
const express = require('express');
const app = express();

app.get('/api/robots', (req, res) => {
  res.send(JSON.stringify(db.robots))
});

app.get('/api/parts', (req, res) => {
  res.send(JSON.stringify(db.parts))
});

app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);