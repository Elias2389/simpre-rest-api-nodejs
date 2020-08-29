const joi = require('@hapi/joi');

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.string().uri();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.number().min(1).max(300);
const movieContentRattingSchema = joi.string().max(5);
const movieSourceSchema = joi.string().uri();
const movieTagSchema = joi.array().items(joi.string().max(50))


const createMovie = {
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRatting: movieContentRattingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagSchema
};

const updateMovie = {
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    description: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRatting: movieContentRattingSchema,
    source: movieSourceSchema,
    tags: movieTagSchema
};


module.exports = {
    movieIdSchema, 
    createMovie,
    updateMovie
};