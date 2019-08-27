const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

const { log } = console;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/dist`, 'index.html'));
});

app.listen(PORT, () => {
  log(`App Running on Port: ${PORT}`);
});
