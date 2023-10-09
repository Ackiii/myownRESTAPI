//Modell controls Data
import {searchForData} from '/Arnes/Website/server/myownRESTAPI/database.js';


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