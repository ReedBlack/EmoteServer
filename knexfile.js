module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/emote"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};