const bd = require("./../utils/bd");

const getAll = () => bd("personas").select("id", "nombre", "apellido", "mail"); //o ("*");

const getSingle = (id) =>
  bd("personas")
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail");
// .limit(1);

const create = (obj) => bd("personas").insert(obj);

const modify = (id, obj) => bd("personas").where({ id }).update(obj);

module.exports = { getAll, getSingle, create, modify };
