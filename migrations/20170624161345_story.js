exports.up = function(knex, Promise) {
  return knex.schema.createTable('story', (table) =>{
    table.increments('id').primary();
    table.integer('grouping_id').references('grouping.id').unsigned().onDelete('cascade');
    table.string('name').notNullable();
    table.integer('difficulty');
    table.integer('order');
    table.timestamp('deadline');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('story');
};
