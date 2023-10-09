//Controller runs the actions needed, gets data from model
//TODO: Build the needed Search functions
import { find } from '/Arnes/Website/server/myownRESTAPI/models/personalDataModel.js';

async function getAllPersonalData(req, res) {
    try {
        const fetchedData = await find()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(fetchedData));
    } catch (error) {
        //TODO: set a error message in the DB not a console.log()
        console.log(error);
    }
}

//Get 1 item, can be a generic function first
async function getPersonalData(req, res) {
    try {
        //Set keyword from req
        const fetchedData = await findInDatabase("prename");
        console.log(fetchedData);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify('message: "OtherFile"'));
    } catch (error) {
        //TODO set a error message in the DB not a console.log()
        console.log(error);
    }
}


//Post 1 item 

//Delete will not be implemented, because its a demo API

export default {
    getPersonalData,
    getAllPersonalData
}