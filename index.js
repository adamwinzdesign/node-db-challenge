const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`** Server is listening on port ${PORT}! **`)
})

// project can have multiple tasks
// task belongs to only one project
// project can use multiple resources (ex computer, microphone, van, ect)
// the same resource can be used in multiple projects

// projects
// unique id
// name - required
// description - not required
// completed property defaults to false, cannot be null

// resources
// unique id
// name - required, must be unique
// description - not required

// task
// unique id
// description - required
// notes - not required
// completed - boolean, defaults to false
// client must provide the id of an existing project to add a task

// endpoints:
// add resource
// get list of all resources
// add project
// get list of all projects
// add tasks
// get a list of tasks, list should include the project name and project description
