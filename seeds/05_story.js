
const story = require('./seeds-data/story')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE story RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('story').insert(story);
    });
};
