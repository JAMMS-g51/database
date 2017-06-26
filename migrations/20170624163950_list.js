exports.up = function(knex, Promise) {
  return knex.schema.createTable('list', (table) =>{
    table.increments('id').primary();
    table.integer('story_id').references('story.id').unsigned().onDelete('cascade');
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('list');
};
