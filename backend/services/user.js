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

UserService.getAllUsers = () => {
    const sql = `
    SELECT * 
    FROM users u
    `
    return db.any(sql);
}

UserService.createUser = (username) => {
    const sql = `
    INSERT INTO users (username)
    VALUES ($[username])
    RETURNING id;
    `;
    return db.one(sql, { username })
}