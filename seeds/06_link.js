const link = require('./seeds-data/link')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE link RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('link').insert(link);
    });
};
