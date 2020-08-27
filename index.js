const express = require('express');

const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listenig on port http://localhost:${config.port}`);
  //UU2FSO7LB1tmkDGB
});
