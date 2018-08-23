const database = require("../database-connection");

module.exports = {
    list() {
        return database("user").select();
    },
    read(user_id) {
        return database("user")
            .select()
            .where("user_id", user_id)
            .first();
    },
    create(user) {
        return database("user")
            .insert(user)
            .returning("*")
            .then(record => record[0]);
    },
    update(user_id, user) {
        return database("user")
            .where("user_id", user_id)
            .update(user, "*")
            .then(record => record[0]);
    },
    delete(user_id) {
        return database("user").where("user_id", user_id).del()
    }
};