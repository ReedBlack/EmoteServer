exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([{
        user_id: 1,
        first_name: "sample",
        last_name: "user",
        email: "email@gmail.com",
        password: "123456"
      }, ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE user_user_id_seq RESTART WITH 3;")
    })
};