const router = require('express').Router();
const db = require('../db');

router.route('/robots')
  .get((req, res) => {
    res.send(JSON.stringify(db.robots))
  });

router.route('/robots/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const robot = db.robots.find(r => r.id === id);
    res.send(JSON.stringify(robot));
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    const index = db.robots.findIndex(post => post.id === id);
    const item = {
      id,
      age: req.body.age,
      name: req.body.name,
    };
    (index === -1) ? db.robots.push(item) : db[index] = item;
    res.send(JSON.stringify(item));
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index  = db.robots.findIndex(post => post.id === id);
    let deletedItem = {};
    if(index !== -1) {
      deletedItem = db.robots.splice(index, 1);
    }
    res.send(deletedItem);
  });

module.exports = router;