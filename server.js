const path = require('path');
const express = require('express');
const errorHandler = require('./errorHandling');
const logger = require('./logger');
const app = express();
const mongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'robo';

mongoClient.connect(url, function (err, client) {
  if (err) {
    console.error('Cannot connect to MongoDB!');
    return;
  }
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  getAllItems(db, function () {
    client.close();
  })
});

function getAllItems(db, callback) {
  const cursor = db.collection('parts').find();
  cursor.each((err, doc) => {
    if (err) {
      console.error('Cannot get parts!');
      return;
    }
    console.log(doc);
  });
  callback();
}


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