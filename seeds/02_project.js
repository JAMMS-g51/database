const project = require('./seeds-data/project')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE project RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('project').insert(project);
    });
};
