const bd = require("../utils/bd");
// const T = require("../utils/schemas")
const get = (id) =>
  bd("personas")
    .join("usuarios", "personas.id", "usuarios.Idpersona")
    .where("usuarios.id", id)
    .andWhere("usuarios.habilitado", true)
    .select("usuario", "nombre", "apellido", "mail", "telefono");

const update = ({ id = false, obj, confirmacionCorreo = {} }) =>
  bd("usuarios").where(id).orWhere({ confirmacionCorreo }).update(obj);

module.exports = { get, update };
