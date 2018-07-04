const router = require('express').Router();
const db = require('../db');

router.route('/parts')
  .get((req, res) => {
    res.send(JSON.stringify(db.parts))
  });
  // task: add crud

router.route('/parts/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const robot = db.parts.find(p => p.id === id);
    res.send(JSON.stringify(robot));
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    const index = db.parts.findIndex(p => p.id === id);
    const item = {
      id,
      age: req.body.age,
      name: req.body.name,
    };
    (index === -1) ? db.parts.push(item) : db[index] = item;
    res.send(JSON.stringify(item));
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index  = db.parts.findIndex(p => p.id === id);
    let deletedItem = {};
    if(index !== -1) {
      deletedItem = db.parts.splice(index, 1);
    }
    res.send(deletedItem);
  });

module.exports = router;