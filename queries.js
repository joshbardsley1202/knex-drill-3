const database = require("./database-connection");

module.exports = {
    list() {
        return database("games")
    },
    read(id) {
        return database("games")
            .where("id", id)
            .first()
    },
    create(games) {
        return database("games")
            .insert(games, "*")
            .then(record => record[0])
    },
    update(id, games) {
        return database("games")
            .where("id", id)
            .update(games, "*")
    },
    delete(id) {
        return database("games")
            .where("id", id)
            .del()
    }
};