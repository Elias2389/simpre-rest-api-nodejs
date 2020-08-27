const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandler');

app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listenig on port http://localhost:${config.port}`);
  //UU2FSO7LB1tmkDGB
});
