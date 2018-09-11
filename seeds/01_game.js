const games = require("../games")

exports.seed = function (knex, Promise) {
  return knex("games").del()
    .then(function () {
      return knex("games").insert(games);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE games_id_seq RESTART WITH 4;")
    });
};