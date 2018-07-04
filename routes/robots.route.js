const router = require('express').Router();
const data = require('../db').robots;

router.route('/robots')
  .get((req, res) => {
    res.send(JSON.stringify(data))
  });

router.route('/robots/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const robot = data.find(r => r.id === id);
    res.send(JSON.stringify(robot));
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(post => post.id === id);
    const item = {
      id,
      age: req.body.age,
      name: req.body.name,
    };
    (index === -1) ? data.push(item) : data[index] = item;
    res.send(JSON.stringify(item));
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index  = data.findIndex(post => post.id === id);
    let deletedItem = {};
    if(index !== -1) {
      deletedItem = data.robots.splice(index, 1);
    }
    res.send(deletedItem);
  });

module.exports = router;