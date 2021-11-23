const express = require('express');
const { join, resolve } = require('path');

const app = express();
const dirname = resolve();
const port = 80;

app.use(express.static(join(dirname, './dist/index.html')));
app.get('*', (req, res) => res.sendFile(join(dirname, './dist/index.html')));

app.listen(port);

console.log(`Server running on port ${port}`);
