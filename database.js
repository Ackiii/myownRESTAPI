/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */
import fs from 'fs';
import credentials from './credentials.js';
import { createConnection } from 'mysql';
const tableName = "apidata";
const { hostid, username, userpassword } = credentials;
const logFilePath = 'error.log';
const errorMessage = 'Error: Connection to the database failed.';


const connection = createConnection({
    host: hostid,
    user: username,
    password: userpassword,
    connectionLimit: 10,
})

async function searchForData(keyword){
    connection.query(`SELECT ? FROM ?`,[keyword,tableName], async (err,res)=>{
        fs.appendFile(logFilePath, errorMessage + '\n', (err) => {
            if (err) {
              console.error('Error writing to the log file:', err);
            } else {
              console.log('Error message logged to', logFilePath);
            }
        });
        console.log(res);
        return res;
    })
}

export default {
    searchForData
}