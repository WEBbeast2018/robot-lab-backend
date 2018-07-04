const router = require('express').Router();
const data = require('../db').robots;

router.route('/robots')
  .get((req, res) => {
    res.json(data);
  });

router.route('/robots/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id);
    const robot = data.find(r => r.id === id);
    res.json(robot);
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
    res.json(item);
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    const index  = data.findIndex(post => post.id === id);
    if(index !== -1) {
      data.splice(index, 1);
    }
    res.send(200);
  });

module.exports = router;