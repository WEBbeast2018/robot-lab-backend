const router = require('express').Router();
const data = require('../db').parts;

function createItem(req) {
  return {
    id,
    age: req.body.age,
    name: req.body.name,
    cpu: 'i5'
  };
}

router.route('/parts')
  .get((req, res) => {
    res.json(data);
  });

router.route('/parts/:id')
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
    const index = data.findIndex(p => p.id === id);
    let deletedItem = {};
    if (index !== -1) {
      deletedItem = data.splice(index, 1);
    }
    res.send(deletedItem);
  });

module.exports = router;