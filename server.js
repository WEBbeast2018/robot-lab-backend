const express = require('express');
const app = express();
app.use(express.json());

const partsRouter = require('./routes/parts.route');
const robotsRouter = require('./routes/robots.route');

app.use((req, res, next) => {
  // task: save to a file
  console.log('Time:', Date.now());
  next();
});

app.use('/api', partsRouter);
app.use('/api', robotsRouter);

app.get('/error/:msg', (req, res) => {
  res.send(`
    <h1>Whoops</h1>
    <p>${req.params.msg}</p>
  `);
});

app.all('*', (req, res) => {
  throw new URIError();
});

app.use((err, req, res, next) => {
  console.error(`Something bad happened: ${err}`);
  if(err instanceof URIError) {
    res.redirect(`/error/wrong-path`);
  } else {
    res.status(500).send('bad stuff happened');
  }
  next();
});

app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);