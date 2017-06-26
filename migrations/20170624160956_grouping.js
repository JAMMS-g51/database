exports.up = function(knex, Promise) {
  return knex.schema.createTable('grouping', (table) =>{
    table.increments('id').primary();
    table.integer('project_id').references('project.id').unsigned().onDelete('cascade');
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('grouping');
};
