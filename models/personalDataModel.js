//Modell controls Data
import {searchForData} from 'database.js';
import {personalData} from 'personaldata.json';

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