const projectsDB = require('../data/db-config.js');

module.exports = {
  getAllProjects,
  addProject
}

function getAllProjects() {
  return projectsDB('projects');
}

function addProject(project) {
  return projectsDB('projects')
    .insert(project)
    .then(project => {
      return project;
    })
}
