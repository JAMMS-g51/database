
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_project', (table) =>{
    table.increments('id').primary();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
    table.integer('project_id').references('project.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('user_project');
};
