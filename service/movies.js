const { moviesMock } = require('../utils/moviesMocks');

class MoviesServices {

    async getMovies() {
        const movies = await Promise.resolve(moviesMock)
        return movies || [];
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0])
        return movie || {};
    }

    async createMovie() {
        const createdMovie = await Promise.resolve(moviesMock[0].id)
        return createdMovie || {};
    }

    async updateMovie() {
        const updatedMovie = await Promise.resolve(moviesMock[0])
        return updatedMovie || {};
    }

    async deleteMovie() {
        const deletedMovie = await Promise.resolve(moviesMock[0])
        return deletedMovie || {};
    }

}

module.exports = MoviesServices