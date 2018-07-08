const path = require('path');
const express = require('express');
const errorHandler = require('./errorHandling');
const logger = require('./logger');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';

function getAllItems(db, callback) {
  const cursor = db.collection('items').find();
  cursor.each((err, doc) => {
    console.log(doc);
  });
  callback();
}

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  getAllItems(db, function() {
    client.close();
  })
});


// json parser middleware
app.use(express.json());
// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

const partsRouter = require('./routes/parts.route');
const robotsRouter = require('./routes/robots.route');

app.use(logger);
app.use('/api', partsRouter);
app.use('/api', robotsRouter);

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/error.html'));
});

app.all('/test', (req, res) => {
  throw new Error()
});
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(errorHandler);

app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);