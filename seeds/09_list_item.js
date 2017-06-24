const list_item = require('./seeds-data/list_item')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE list_item RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('list_item').insert(list_item);
    });
};
