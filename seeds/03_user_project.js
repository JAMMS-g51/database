
const user_project = require('./seeds-data/user_project')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE user_project RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('user_project').insert(user_project);
    });
};
