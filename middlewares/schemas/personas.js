const Joi = require("@hapi/joi");
// const { schema } = require("../../utils/bd");
//new Regexp()

const messageNombre = {
  "any.required": "El campo nombre es obligatorio",
  "string.min": "El campo nombre debe tener al menos dos caracteres",
  "string.max": "El campo nombre no debe tener más de 30 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required().messages(messageNombre),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().required(),
    telefono: Joi.string().required(),
  }),

  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().required(),
    telefono: Joi.string().required(),
  }),
};

module.exports = { schemas };
