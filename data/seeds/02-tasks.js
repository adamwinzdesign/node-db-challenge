
exports.seed = function(knex) {
 
  // Inserts seed entries
  return knex('tasks').insert([
    {description: "add endpoints"},
    {description: "test endpoints"},
    {description: "fill out sprint retro"},
    {description: "get in car, drive to restaurant"},
    {description: "order food"}
  ]);
 
};
