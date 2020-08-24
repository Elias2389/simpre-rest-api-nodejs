const express = require('express');
const { moviesMock } = require('../utils/moviesMocks');

function moviesApi(app) {
    const router = express.Router();

    app.use("/api/movies", router);

    router.get("/home", async (req, res, next) => {
        try {
           const movies = await Promise.resolve(moviesMock);
           res.status(200).json({
               data: movies,
               message: 'Movies listed'
           });
        } catch(err) {
            next(err)
        }
    })
} 

module.exports = moviesApi