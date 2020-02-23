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

// get all resources
router.get('/resources', (req, res) => {
  Projects.getAllResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'Error getting all resources.' })
    })
})

// post new resource
router.post('/resources', (req, res) => {
  const newResourceData = req.body;

  if(!newResourceData.name) {
    res.status(400).json({ errorMessage: 'Please provide a name for the resource!' })
  } else {
    Projects.addResource(newResourceData)
      .then(resource => {
        res.status(201).json(resource)
      })
  }
})

// get all tasks
router.get('/tasks', (req, res) => {
  Projects.getAllTasks()
    .then(tasks => {
      tasks.map(task => {
        if(task.completed === 1) {
          task.completed = true;
        } else {
          task.completed = false;
        }
      });
      res.status(200).json(tasks)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'Error getting all tasks.' })
    })
})

// add new task
router.post('/:id/tasks', (req, res) => {
  const id = req.params.id;
  const newTaskData = req.body;

  if(!newTaskData.description) {
    res.status(400).json({ errorMessage: 'Please provide a description for this task! '})
  } else {
    Projects.addTask(newTaskData)
      .then(task => {
        res.status(201).json(task);
        Projects.updateProjectTask(id, task.id)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: 'Error adding task to project' })
      })
  }
})

// get all tasks by project id
router.get('/:id/tasks', (req, res) => {
  const id = req.params.id;
  Projects.getAllTasksByProjectID(id)
    .then(task => {
      if(task) {
        res.status(200).json(task)
      } else {
        res.status(404).json({ errorMessage: 'Error getting all tasks with that project id' })
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Could not get tasks', error })
    })
})

module.exports = router;
