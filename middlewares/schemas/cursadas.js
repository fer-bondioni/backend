const Joi = require("@hapi/joi");
const { schema } = require("../../utils/bd");
const schemaId = Joi.number().integer().positive().required();

const schemas = {
  create: Joi.object().keys({
    cursoId: schemaId.messages({
      "any.required": "El campo Id es obligatorio",
    }),
    modalidadId: schemaId,
    docenteId: schemaId,
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().optional(),
    precio: Joi.number().required(),
    horario: Joi.string().required(),
  }),
};

module.exports = { schemas };
