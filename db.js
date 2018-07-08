const mongoose = require('mongoose');

// set connection
mongoose.connect('mongodb://localhost:27017/robo', {useNewUrlParser:true});
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


const ROBOTS = [
  {
    id: 1,
    age: 15,
    name: 'Dave',
    type: 'droid',
    parts: [{
      partId: 101,
      condition: 35
    }]
  },
  {
    id: 2,
    age: 16,
    name: 'Dave2',
    type: 'android',
    parts: [{
      partId: 104,
      condition: 90
    }, {
      partId: 101,
      condition: 90
    }]
  },
  {
    id: 3,
    age: 17,
    name: 'Dave3',
    type: 'droid',
    parts: [{
      partId: 102,
      condition: 23
    }
    ]
  },
  {
    id: 4,
    age: 18,
    name: 'Dave4',
    type: 'droid',
    parts: [
      {
        partId: 103,
        condition: 99
      },
      {
        partId: 102,
        condition: 76
      },
      {
        partId: 105,
        condition: 87
      }]
  }
];

module.exports = {
  Part,
	robots: ROBOTS
};