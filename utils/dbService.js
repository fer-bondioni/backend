const bd = require("../utils/bd");

const create = (tablename, obj) => db(tableName).insert(obj);

const modify = (tablename, obj, conditions) =>
  db(tableName).where(conditions).update(obj);

module.exports = { create, modify };
