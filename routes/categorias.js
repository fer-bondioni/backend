const express = require("express");
const router = express.Router();
const service = require("./../models/categorias");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const modify = (req, res) =>
  service
    .modify(req.body, req.params.id)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.get("/all", all);
router.put("/modify/:id", modify);
router.post("/create", create);

module.exports = router;
