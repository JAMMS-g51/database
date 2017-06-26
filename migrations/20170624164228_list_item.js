
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_item', (table) =>{
    table.increments('id').primary();
    table.integer('list_id').references('list.id').unsigned().onDelete('cascade');
    table.string('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('list_item');
};
