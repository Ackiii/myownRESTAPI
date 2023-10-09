//Modell controls Data
const {searchForData} = require('database.js')
const personalData = require('personaldata.json')

function find(){
    return new Promise((resolve, reject) => {
        resolve(personalData)
    })
}

//HERE WE NEED THE call 
async function findInDatabase(keyword){
    return await searchForData(keyword)
}

module.exports = {
    find,
    findInDatabase
}