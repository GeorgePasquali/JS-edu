const Joi = require('joi');

let createBookSchema = Joi.object().keys({
    name: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().length(13).required(),
    year: Joi.number().required(),
    publisher: Joi.string().required()
});

let updateBookSchema = Joi.object().keys({
    id: Joi.number().positive().required(),
    name: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().length(13).required(),
    year: Joi.number().required(),
    publisher: Joi.string().required()
});

let deleteBookSchema = Joi.object().keys({
    id: Joi.number().positive().required()
});

module.exports = {
    createBookSchema,
    updateBookSchema,
    deleteBookSchema
}