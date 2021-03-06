const express = require("express");
const router = express.Router();
const service = require("./../models/cursos");
const { validateCreate } = require("./../middlewares/cursos");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const single = (req, res) =>
  service
    .getSingle(req.params.id)
    .then(([response]) => res.json(response))
    .catch((e) => res.status(500).json(e));

const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const modify = (req, res) =>
  service
    .modify(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", modify);

module.exports = router;
