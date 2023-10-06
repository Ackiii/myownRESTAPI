/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */

const {user, password} = require('credentials.js');
const {createConnection} = require('mysql');

const connection = createConnection({
    host: "localhost",
    user: user,
    password: password,
    connectionLimit: 10,
})