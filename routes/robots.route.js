const router = require('express').Router();
const data = require('../db').robots;

function createItem(req) {
  return {
    id,
    age: req.body.age,
    name: req.body.name,
  };
}

router.route('/robots')
  .get((req, res) => {
    res.json(data);
  });

router.route('/robots/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    res.json(item);
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    const item = createItem(req);
    (index === -1) ? data.push(item) : data[index] = item;
    res.json(item);
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index  = data.findIndex(post => post.id === id);
    let deletedItem = {};
    if(index !== -1) {
      deletedItem = data.robots.splice(index, 1);
    }
    res.json(data);
  });

module.exports = router;