let pgp = null;
let db = null;

if (!pgp) {
    pgp = require('pg-promise')({});
    db = pgp('postgres://localhost/tvwatchlistapp');
}

module.exports = { db }