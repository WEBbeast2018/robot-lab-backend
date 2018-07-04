const router = require('express').Router();
const db = require('../db');

router.route('/parts')
  .get((req, res) => {
    res.send(JSON.stringify(db.parts))
  });
  // task: add crud

module.exports = router;