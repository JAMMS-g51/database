const grouping = require('./seeds-data/grouping')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE grouping RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('grouping').insert(grouping);
    });
};
