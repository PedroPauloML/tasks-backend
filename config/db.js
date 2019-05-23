const config = require("../knexfile.js")
const knex = require("knex")(config)

// Apply migrations to db
knex.migrate.latest([config])

module.exports = knex