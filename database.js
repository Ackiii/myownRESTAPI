/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */
import fs from 'fs';
import credentials from './credentials.js';
import { createConnection } from 'mysql2';
const tableName = 'apidata';
const { hostid, username, userpassword } = credentials;
const databaseName = 'ARNESRESTAPI';
const logFilePath = 'error.log';
const logFilePathres = 'result.log';

const connection = createConnection({
    host: hostid,
    user: username,
    password: userpassword,
    database: databaseName,
    connectionLimit: 10,
})

async function searchForData(keyword){
    connection.query(`SELECT ? FROM ?`,[keyword,tableName], async (err,res)=>{
        fs.appendFile(logFilePath, err + '\n', (errx) => {
            if (errx) {
              console.error('Error writing to the log file:', errx);
            } else {
              console.log('Error message logged to', logFilePath);
            }
        });
        fs.appendFile(logFilePathres, res + '\n', (errx) => {
            if (errx) {
              console.error('Error writing to the log file:', errx);
            } else {
              console.log('Error message logged to', logFilePathres);
            }
        });
        console.log(res);
        return res;
    })
}

export default {
    searchForData
}