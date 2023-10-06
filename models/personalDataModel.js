//Modell controls Data

const personalData = require('../data/personaldata.json')

function find(){
    return new Promise((resolve, reject) => {
        resolve(personalData)
    })
}

module.exports = {
    find
}