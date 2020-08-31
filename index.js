const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const { logErrors, wrapError, errorHandler } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

moviesApi(app);

//404 error Handler
app.use(notFoundHandler);

//Error middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);


app.listen(config.port, () => {
  console.log(`Listenig on port http://localhost:${config.port}`);
  //UU2FSO7LB1tmkDGB
});
