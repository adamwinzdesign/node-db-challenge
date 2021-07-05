
exports.seed = function(knex) {
 
  // Inserts seed entries
  return knex('resources').insert([
    {
      // project_id: 1,
      name: "macbook pro"
    },
    {
      // project_id: 2,
      name: "Subaru Outback"
    },
  ]);

};
