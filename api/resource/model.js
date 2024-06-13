const knex = require('../../data/dbConfig'); 

function create(data) {
  return knex('resources').insert(data).returning('*');
}

function find() {
  return knex('resources').select('*');
}

module.exports = {
  create,
  find
};
