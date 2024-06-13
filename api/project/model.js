const knex = require('../../data/dbConfig');

async function create(data) {
  try {
    const result = await knex('projects').insert(data).returning('*');
    return result.map(project => ({
      ...project,
      project_completed: !!project.project_completed 
    }));
  } catch (error) {
    console.error('Error Creating project:', error);
    throw error;
  }
}

async function find() {
  try {
    const projects = await knex('projects').select('*');
    return projects.map(project => ({
      ...project,
      project_completed: !!project.project_completed 
    }));
  } catch (error) {
    console.error('Error Finding projects:', error);
    throw error;
  }
}

module.exports = {
  create,
  find
};
