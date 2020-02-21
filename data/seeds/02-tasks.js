
exports.seed = function(knex) {
 
  // Inserts seed entries
  return knex('tasks').insert([
    {project_id: 1, description: "add endpoints"},
    {project_id: 1, description: "test endpoints"},
    {project_id: 1, description: "fill out sprint retro"},
    {project_id: 2, description: "get in car, drive to restaurant"},
    {project_id: 2, description: "order food"}
  ]);
 
};
