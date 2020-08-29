const boom = require('@hapi/boom');
const { config } = require('../../config');

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapError(err, req, res, next) {
  if (!err.isBoom ) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) { //eslint-disable-line
const { output: { statusCode, payload } } = err;

  res.status(statusCode || 500);
  res.json(withErrorStack(payload, err.stack));
}

function withErrorStack(err, stack) {
  if (config.dev) {
    return { ...err, stack };
  }

  return err;
}

module.exports = { 
    logErrors,
    wrapError,
    errorHandler
 };
