const bd = require("../utils/bd");

const getAll = () =>
  bd("docentes").select("nombre", "apellido", "cuit", "mail");

const create = (obj) => bd("docentes").insert(obj);

module.exports = { getAll, create };
