
exports.seed = function(knex) {

  // Inserts seed entries
  return knex("projects").insert([
    {
      name: "Adding Data Persistence Sprint Challenge",
      description: "Create a database with projects, tasks, and resources"
    },
    {
      name: "Get dinner",
      description: "Go get dinner"
    }
  ]);
  
};
