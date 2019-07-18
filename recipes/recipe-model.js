const kenx = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("recipes");
}

function findById(id) {
  return db("recipes").where({ id: Number(id) });
}

function add(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}

function update(change, id) {
  return db("recipes")
    .where("id", Number(id))
    .update(change);
}

function remove(id) {
  return db("recipes")
    .where("id", Number(id))
    .del();
}
