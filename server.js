const express = require('express');

// consider adding helmet
// consider adding morgan

const ProjectsRouter = require('./projects/ProjectsRouter.js');

const server = express();

server.use(express.json());

server.use('/projects', ProjectsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the projects server!</h1>
  `)
})

module.exports = server;
