const database = require("../database-connection");

module.exports = {
    list() {
        return database("userdata").select();
    },
    read(userdata_id) {
        return database("userdata")
            .select()
            .where("userdata_id", userdata_id)
            .first();
    },
    create(userdata) {
        return database("userdata")
            .insert(userdata)
            .returning("*")
            .then(record => record[0]);
    },
    update(userdata_id, userdata) {
        return database("userdata")
            .where("userdata_id", userdata_id)
            .update(userdata, "*")
            .then(record => record[0]);
    },
    delete(userdata_id) {
        return database("userdata").where("userdata_id", userdata_id).del()
    }
};