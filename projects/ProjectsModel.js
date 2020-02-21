const projectsDB = require('../data/db-config.js');

module.exports = {
  find
}

function find() {
  return projectsDB(projects);
}
