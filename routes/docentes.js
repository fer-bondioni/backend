const express = require("express");
const router = express.Router();
const service = require("../models/docentes");
const multer = require("multer");
const config = { dest: "./public/tmp" }; //crea la carpeta de modo automatica
const upload = multer(config);

const all = (req, res) => {
  service
  .getAll()
  .then((r)=>res.json(r))
  .catch((e)=>res.status(500).json(e));
};

// .tmp
// req -> body, params, query, files, session

// Insertar un docente en la tabla
// Tenemos que almacenar la imagen del docente
// Tenemos que subir la imagen del docente a aws

const create = (req, res) => {
  try{
    const result = service.createDocente(req.body, req.file);
    res.json({result});
  }
  catch{
    res.sendStatus(500);
  }
  // console.log(req.files);
};

router.get("/all", all);
// router.get("/single/:id", single);
router.post("/create", upload.array("imagen"), create);
// router.put("/modify/:id", modify);

module.exports = router;
