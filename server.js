const path = require('path');
const express = require('express');
const errorHandler = require('./errorHandling');
const logger = require('./logger');
const app = express();
const mongoose = require('mongoose');

// set connection
mongoose.connect('mongodb://localhost/robo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});


// create schema
const PartSchema = mongoose.Schema({
  cpu: String,
  engine: String,
  id: Number,
  name: String,
  type: String
});
const Part = mongoose.model('Part', PartSchema);
Part.find({}, (err, parts) => {
  console.log('here are the parts!', parts)
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