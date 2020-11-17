const bd = require("./../utils/bd");
const bdService = require("../utils/dbService");

const getAll = () => bd("personas").select("id", "nombre", "apellido", "mail"); //o ("*");

const getSingle = (id) =>
  bd("personas")
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail", "telefono");
// .limit(1);

const create = (obj) => bdService.create("personas", obj);

const modify = (id, obj) => bd("personas").where({ id }).update(obj);

module.exports = { getAll, getSingle, create, modify };
