const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('Test server');
});

app.listen(config.port, () => {
    console.log(`Listenig on port http://localhost:${config.port}`);
});