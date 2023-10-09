//Modell controls Data
const {searchForData} = require('../Arnes/Website/server/myownRESTAPI/database.js')
const personalData = require('../Arnes/Website/server/myownRESTAPI/data/personaldata.json')

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