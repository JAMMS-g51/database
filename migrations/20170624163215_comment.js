exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) =>{
    table.increments('id').primary();
    table.integer('story_id').references('story.id').unsigned().onDelete('cascade');
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
    table.text('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('comment');
};
