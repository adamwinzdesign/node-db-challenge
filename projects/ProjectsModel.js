const projectsDB = require('../data/db-config.js');

module.exports = {
  getAllProjects,
  addProject,
  getAllResources,
  addResource,
  getAllTasks,
  addTask,
  updateProjectTask
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

function getAllResources() {
  return projectsDB('resources');
}

function addResource(resource) {
  return projectsDB('resources')
    .insert(resource)
    .then(resource => {
      return resource;
    })
}

function getAllTasks() {
  return projectsDB('tasks')
}

function addTask(task) {
  return projectsDB('tasks')
    .insert(task)
    .then(task => {
      return task;
    })
}

function updateProjectTask(project_id, task_id) {
  return projectsDB('projects_tasks')
    .insert({ project_id, task_id })
    .then(project_task => {
      console.log(project_task);
    })
}
