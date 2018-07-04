const express = require('express');
const app = express();
app.use(express.json());

const partsRouter = require('./routes/parts.route');
const robotsRouter = require('./routes/robots.route');



app.use('/api', partsRouter);
app.use('/api', robotsRouter);

app.listen(3000,
  () => console.log('Robot labs API server listening on port 3000!')
);