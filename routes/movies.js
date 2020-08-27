const express = require('express');
const MoviesServices = require('../service/movies');

const moviesService = new MoviesServices();

function moviesApi(app) {
    const router = express.Router();

    app.use("/api/movies", router);

    router.get("/", async (req, res, next) => {
        const { tags } = req.query;
        try {
           const movies = await moviesService.getMovies({ tags });
           res.status(200).json({
               data: movies,
               message: 'Movies listed'
           });
        } catch(err) {
            next(err)
        }
    });

    router.get("/:movieId", async (req, res, next) => {
        const { movieId } = req.params;
        try {
           const movies = await moviesService.getMovie({ movieId });
           res.status(200).json({
               data: movies,
               message: 'Movies retrieve'
           });
        } catch(err) {
            next(err)
        }
    });

    router.post("/", async (req, res, next) => {
        const { body: movie } = req;
        try {
           const createMovieId = await moviesService.createMovie({ movie });
           res.status(201).json({
               data: createMovieId,
               message: 'Movie created'
           });
        } catch(err) {
            next(err)
        }
    });

    router.put("/:movieId", async (req, res, next) => {
        const { body: movie } = req;
        const { movieId } = req.params;
        try {
           const updateMovie = await moviesService.updateMovie({ movieId, movie });
           res.status(200).json({
               data: updateMovie,
               message: 'Movie updated'
           });
        } catch(err) {
            next(err)
        }
    });

    router.delete("/:movieId", async (req, res, next) => {
        const { movieId } = req.params;
        try {
           const deletedMovie = await moviesService.deleteMovie({ movieId });
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