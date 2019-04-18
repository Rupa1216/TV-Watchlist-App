const { db } = require('../db');
const UserService = {};

UserService.getUser = (id) => {
    const sql = `
    SELECT * 
    FROM users u
    WHERE u.id = $[id]
    `
    return db.one(sql, { id });
}

