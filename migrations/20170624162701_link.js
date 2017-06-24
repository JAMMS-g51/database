exports.up = function(knex, Promise) {
  return knex.schema.createTable('link', (table) =>{
    table.increments('id').primary();
    table.integer('story_id').references('story.id').unsigned().onDelete('cascade');
    table.string('href').notNullable();
    table.string('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('link');
};
