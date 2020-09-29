const bd = require("./../utils/bd");
const categorias = require("./categorias");

const getAll = () => bd("cursos").select("*");

const getSingle = (id) =>
  bd("cursos")
    .join("categorias", "cursos.idCategoria", "categorias.id")
    .where("cursos.id", id)
    .select("cursos.nombre", "categorias.nombre");

const modify = (obj, id) => bd("cursos").where({ id }).update(obj);

const create = (obj) => bd("cursos").insert(obj);

module.exports = { getSingle, getAll, modify, create };
