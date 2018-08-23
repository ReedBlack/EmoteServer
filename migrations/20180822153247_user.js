exports.up = function (knex, Promise) {
    return knex.schema.createTable("user", table => {
        table.increments('user_id')
        table.text('first_name')
        table.text('last_name')
        table.text('email')
        table.text('password')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};