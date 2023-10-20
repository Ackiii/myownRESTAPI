//Model controls Data
import database from '../database.js';

const {searchForData,searchForAllData,updateValue} = database

async function findAllInDatabase(keyword){
    return await searchForAllData(keyword)
}

async function findInDatabase(keyword){
    return await searchForData(keyword)
}

async function updateDatabase(value){
    return await updateValue(parseInt(value));
}

export default {
    findInDatabase,
    findAllInDatabase,
    updateDatabase
}