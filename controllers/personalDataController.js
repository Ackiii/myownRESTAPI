const PersonalData = require('../models/personalDataModel');

async function getPersonalData(req, res) {
    try {
        const fetchedData = await PersonalData.find()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(fetchedData));

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPersonalData
}