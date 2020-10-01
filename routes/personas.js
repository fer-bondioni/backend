const express = require("express");
const router = express.Router(); //a q rutas ingresa el usuario y bajo q verbo
const service = require("./../models/personas");
const { validateCreate } = require("./../middlewares/personas");
//prolijo acciones y funciones por otro lado

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

// const single = (req, res) => {
//   service
//     .getSingle(req.params.id)
//     .then([response]) => res.json(response))
//     .catch((e) => res.status(500).json(e));
// };

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await service.getSingle(id);
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};
///req.body contiene un objeto con toda la info del formulario
const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

// const obj = {nombre, apellido, mail, telefono } = req.body;
//const result = await service.create(obj);

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

// {const obj = ({nombre, apellido, mail, telefono}) = req.body}

// const getSingle = (id) =>
//   bd("cursos as c")
//     .join("categorias", "cursos.idCategoria", "categorias.id")
//     .where("cursos.id", id)
//     .select("cursos.nombre", "categorias.nombre");

router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", modify);
module.exports = router;
