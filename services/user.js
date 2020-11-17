const bd = require("../utils/bd");
const { v4: uuid } = require("uuid");
const sha1 = require("sha1");
const { send } = require("./mail");

const create = async (obj) => {
  try {
    const { nombre, apellido, mail, telefono } = obj;
    const { usuario, password } = obj;

    const persona = { nombre, apellido, mail, telefono };
    const [idPersona] = await bd("personas").insert(persona);

    const user = {
      usuario,
      password: sha1(password),
      idPersona,
      confirmacionCorreo: uuid(),
    };
    const [idUsuario] = await bd("usuarios").insert(user);
    return idUsuario;
    // const messageId = await send({
    //   to: mail,
    //   subject: "gracias por registrarte",
    //   html: "envio de link unico",
    // });
    // return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { create };


    // const user = ({
      // idPersona = idPersona, //el = en destructuring si no existe la propiedad la crea
      // usuario,
      // password,
      // confirmacionCorreo = uuid(),
    // } = obj);
    // user["password"] = sha1(obj.password);
    // Object.assign(user, { idPersona, confirmacionCorreo: uuid() });