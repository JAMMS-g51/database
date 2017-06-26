
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table) =>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
