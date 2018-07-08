const router = require('express').Router();
const collection = require('../db').Part;

router.route('/parts')
  .get((req, res) => {
    collection.find({}, {_id:0}, (err, data) => {
      res.json(data);
    });
  });

module.exports = router;