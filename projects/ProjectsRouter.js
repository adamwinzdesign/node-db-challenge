const express = require('express');

const Projects = require('./ProjectsModel.js');

const router = express.Router();

// get all projects
router.get('/', (req, res) => {
  Projects.getAllProjects()
    .then(projects => {
      projects.map(project => {
        if (project.completed === 1) {
          project.completed = true;
        } else {
          project.completed = false;
        }
      });
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'Error getting all projects.' })
    })
})

// post new project
router.post('/', (req, res) => {
  const newProjectData = req.body;

  if(!newProjectData.name) {
    res.status(400).json({ errorMessage: 'Please provide a name for the project!' })
  } else {
    Projects.addProject(newProjectData)
      .then(project => {
        res.status(201).json(project)
      })
  }
})

module.exports = router;
