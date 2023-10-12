/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */

import credentials from './credentials.js';
import { createConnection } from 'mysql';
const tableName = "apidata";
const { hostid, username, userpassword } = credentials;

const connection = createConnection({
    host: hostid,
    user: username,
    password: userpassword,
    connectionLimit: 10,
})

async function searchForData(keyword){
    connection.query(`SELECT ? FROM ?`,[keyword,tableName], async (err,res)=>{
        //TODO:
        console.log(res);
        return res;
    })
}

export default {
    searchForData
}