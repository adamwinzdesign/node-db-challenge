
exports.up = function(knex) {
  return knex.schema

    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.string('description', 128);
      tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 128).notNullable();
      tbl.string('notes', 128);
      tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl.string('name', 128).notNullable();
      tbl.string('description', 128);
    })

    .createTable('projects_tasks', tbl => {
      tbl.primary(['project_id', 'task_id']);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
