//Modell controls Data
const {searchInDatabase} = require('../database.js')
const personalData = require('../data/personaldata.json')

function find(){
    return new Promise((resolve, reject) => {
        resolve(personalData)
    })
}

//HERE WE NEED THE call 
function findInDatabase(keyword){
    return searchInDatabase(keyword)
}

module.exports = {
    find,
    findInDatabase
}