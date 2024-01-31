const express = require('express');
const cors = require('cors');
const app = express();
const nuestroCodigo = require("./function.js");

const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
    res.json('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from API side of the app!' });
});

app.get('/api/:id', (req, res) => {
    res.json({ message: `You access the api with id: ${req.params.id}` });
});

app.listen(port, () => {
    console.log(`backend is listening at http://localhost:${port}`);
});
