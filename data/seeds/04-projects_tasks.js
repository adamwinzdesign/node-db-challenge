
exports.seed = function(knex) {

  // Inserts seed entries
  return knex("projects_tasks").insert([
    { project_id: 1, task_id: 1 },
    { project_id: 1, task_id: 2 },
    { project_id: 1, task_id: 3 },
    { project_id: 2, task_id: 4 },
    { project_id: 2, task_id: 5 }
  ]);

};
