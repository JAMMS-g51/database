const comment = require('./seeds-data/comment')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE comment RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('comment').insert(comment);
    });
};
