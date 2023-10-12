//Modell controls Data
import database from '../database.js';

const {searchForData} = database

function find(){
    return new Promise((resolve, reject) => {
        resolve(personalData)
    })
}

//HERE WE NEED THE call 
async function findInDatabase(keyword){
    return await searchForData(keyword)
}

export default {
    find,
    findInDatabase
}