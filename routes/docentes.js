const express = require("express");
const router = express.Router();
const service = require("../models/docentes");
const multer = require("multer");
const config = { dest: "./public/tmp" }; //crea la carpeta de modo automatica
const upload = multer(config);

const all = (req, res) => {};

const create = (req, res) => {
  console.log(req.files);
};

router.get("/", all);
// router.get("/single/:id", single);
router.post("/create", upload.array("imagen"), create);
// router.put("/modify/:id", modify);

module.exports = router;
