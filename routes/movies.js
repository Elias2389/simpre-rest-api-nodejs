const express = require('express');
const MoviesServices = require('../service/movies');

const moviesService = new MoviesServices();

function moviesApi(app) {
    const router = express.Router();

    app.use("/api/movies", router);

    router.get("/", async (req, res, next) => {
        try {
           const movies = await moviesService.getMovies();
           res.status(200).json({
               data: movies,
               message: 'Movies listed'
           });
        } catch(err) {
            next(err)
        }
    });

    router.get("/:movieId", async (req, res, next) => {
        try {
           const movies = await moviesService.getMovie();
           res.status(200).json({
               data: movies,
               message: 'Movies retrieve'
           });
        } catch(err) {
            next(err)
        }
    });

    router.post("/", async (req, res, next) => {
        try {
           const createMovieId = await moviesService.createMovie();
           res.status(201).json({
               data: createMovieId,
               message: 'Movie created'
           });
        } catch(err) {
            next(err)
        }
    });

    router.put("/:movieId", async (req, res, next) => {
        try {
           const updateMovie = await moviesService.updateMovie();
           res.status(200).json({
               data: updateMovie,
               message: 'Movie updated'
           });
        } catch(err) {
            next(err)
        }
    });

    router.delete("/:movieId", async (req, res, next) => {
        try {
           const deletedMovie = await moviesService.deleteMovie();
           res.status(200).json({
               data: deletedMovie,
               message: 'Movie deleted'
           });
        } catch(err) {
            next(err)
        }
    });


} 

module.exports = moviesApi