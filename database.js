/**
 * This file handles the connection of the Database
 * credentials are stored seperatly and are not in the git Repository.
 */

const {host, user, password} = require('/Arnes/Website/server/myownRESTAPI/credentials.js');
const {createConnection} = require('mysql');
const tableName = "apidata";

const connection = createConnection({
    host: host,
    user: user,
    password: password,
    connectionLimit: 10,
})

async function searchForData(keyword){
    connection.query(`SELECT ? FROM ?`,[keyword,tableName], async (err,res)=>{
        //TODO:
        console.log(res);
        return res;
    })
}

module.exports = {
    searchForData
}