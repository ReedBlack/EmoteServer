exports.up = function (knex, Promise) {
    return knex.schema.createTable("userdata", table => {
        table.increments('userdata_id')
        table.integer('user_id')
            .notNullable()
            .references('user_id')
            .inTable('user')
            .onDelete('CASCADE')
            .index()
        table.text('emotion')
        table.text('url')
        table.text('title')
        table.text('author')
        table.text('publication')
        table.text('time')
        table.text('snippet')
        table.text('notes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('userdata')
};