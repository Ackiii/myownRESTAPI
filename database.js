/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */
import credentials from './credentials.js';
import { createConnection } from 'mysql2';
const tableName = 'apidata';
const { hostid, username, userpassword } = credentials;
const databaseName = 'ARNESRESTAPI';

const connection = createConnection({
    host: hostid,
    user: username,
    password: userpassword,
    database: databaseName,
    connectionLimit: 10,
})

function searchForData(keyword) {
  return new Promise((resolve, reject) => {
      connection.query(`SELECT ${keyword} FROM ${tableName} WHERE id = 1`, (err, res) => {
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
      connection.query(`SELECT prename,name,fullname,birthdate,url,favanimal,obsession,post FROM ${tableName} WHERE id = 1`, (err, res) => {
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
      connection.query(`UPDATE ${tableName} SET post = ${value} WHERE id = 1`, (err, res) => {
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