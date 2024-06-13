const knex = require('../../data/dbConfig'); 

function create(data) {
  return knex('tasks').insert(data).returning('*');
}

function find() {
  return knex('tasks')
    .select('tasks.*', 'projects.project_name', 'projects.project_description')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id');
}

module.exports = {
  create,
  find
};