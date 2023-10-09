/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */

import { hostid, username, userpassword } from '/Arnes/Website/server/myownRESTAPI/credentials.js';
import { createConnection } from 'mysql';
const tableName = "apidata";

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