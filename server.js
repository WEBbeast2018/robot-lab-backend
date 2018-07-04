const db = require('./db');
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

router.route('/parts')
  .get((req, res) => {
    res.send(JSON.stringify(db.parts))
  });

router.route('/robots')
  .get((req, res) => {
    res.send(JSON.stringify(db.parts))
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
    const index  = db.findIndex(post => post.id === id);
    if(index !== -1) {
      db.robots.splice(index, 1);
    }
    res.send(JSON.stringify(db));
  });


app.use('/api', router);

app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);