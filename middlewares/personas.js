const { schemas } = require("./schemas/personas");

const validateCreate = (req, res, next) => {
  //en req.body toda la info
  //   const objeto = schemas.create.validate(req.body);
  const { error, value } = schemas.create.validate(req.body);
  console.log(error); //error:, value
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateCreate };
