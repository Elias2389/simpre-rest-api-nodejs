const MongoLib = require('../lib/mongo');

class MoviesServices {

    constructor() {
        this.collection = 'movies';
        this.mongoDb = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const movies = await this.mongoDb.getAll(this.collection, query);
        return movies || [];
    }

    async getMovie({ movieId }) {
        const movie = await this.mongoDb.get(this.collection, movieId);
        return movie || {};
    }

    async createMovie({ movie }) {
        const createdMovie = await this.mongoDb.create(this.collection, movie);
        return createdMovie || {};
    }

    async updateMovie({ movieId, movie } = {} ) {
        const updatedMovie = await this.mongoDb.update(this.collection, movieId, movie);
        return updatedMovie || {};
    }

    async deleteMovie({ movieId }) {
        const deletedMovie = await this.mongoDb.delete(this.collection, movieId);
        return deletedMovie || {};
    }

}

module.exports = MoviesServices