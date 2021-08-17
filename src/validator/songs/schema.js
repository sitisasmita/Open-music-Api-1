const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.string().required(),
  performer: Joi.string().required(),
  genre: Joi.string(),
  duration: Joi.number(),
});

module.exports = { SongPayloadSchema };
