
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
	  table.increments('id').primary();
	  table.string('name').notNullable();
	  table.string('email').unique().notNullable();
	  table.string('password').notNullable();
	  table.boolean('is_active').defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
