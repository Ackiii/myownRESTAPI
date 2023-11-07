/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */
import credentials from './credentials.js';
import mysql from 'mysql2';
const tableName = 'apidata';
const { hostid, username, userpassword } = credentials;
const databaseName = 'ARNESRESTAPI';

const pool = mysql.createPool({
    host: hostid,
    user: username,
    password: userpassword,
    database: databaseName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

function searchForData(keyword) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT ${keyword} FROM ${tableName} WHERE id = 1`, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function searchForAllData() {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT prename,name,fullname,birthdate,url,favanimal,obsession,post FROM ${tableName} WHERE id = 1`, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

function updateValue(value) {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE ${tableName} SET post = ${value} WHERE id = 1`, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

export default {
    searchForData,
    searchForAllData,
    updateValue
}