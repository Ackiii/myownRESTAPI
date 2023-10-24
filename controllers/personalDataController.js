//Controller runs the actions needed, gets data from model
import personalDataModel from '../models/personalDataModel.js';
import fs from 'fs';
import path from 'path';

const logFilePath = 'error.log';
const { findInDatabase, findAllInDatabase, updateDatabase} = personalDataModel;

async function getAllPersonalData(res) {
    try {
        const fetchedData = await findAllInDatabase();
        writeMessage(200,res,JSON.stringify(fetchedData))
    } catch (error) {
        writeMessage(400,res,"Failed!. Check log data");
        writeErrorToLog(error);
    }
}

async function getPersonalData(res, parameter) {
    try {
        //Set keyword from req
        const fetchedData = await findInDatabase(parameter);
        writeMessage(200,res,JSON.stringify(fetchedData))
    } catch (error) {
        writeMessage(400,res,"Failed!. Check log data");
        writeErrorToLog(error);
    }
}

async function updatePersonalData(res, parameter) {
    try {
        const fetchedData = await updateDatabase(parameter);
        writeMessage(200,res,JSON.stringify(fetchedData))
    } catch (error) {
        writeMessage(400,res,"Failed!. Check log data");
        writeErrorToLog(error);
    }
}

//main function
function handleRequest(req,res){
    switch(req.method){
        case 'GET': getData(req,res); break;
        case 'POST': postData(req,res); break;
        default: writeMessage(400, res, `The request Method ${req.method} is not Supported, please use either 'GET' or 'POST'`);
    }
}

function writeMessage(code, res, msg){
    res.writeHead(code, { 'Content-Type': 'application/json' })
    res.end(msg);
}

//Check if data input is valid
function postData(req,res){
    if(req.url.match(/\/api\/data\/([0-9]+)/)){
        const temp = req.url.split("/");
        const value = temp[temp.length - 1]
        return Number.isInteger(parseInt(value)) ? updatePersonalData(res,parseInt(value)) : writeMessage(400,res,"Not a Valid Number");
    }else{
        writeMessage(400,res,"No such URL, is the Parameter a 10 bit Number?");
    }
}

function getData(req,res){
    if(req.url.match(/\/api\/data\/([a-z]+)/)){
        const temp = req.url.split("/");
        const parameter = temp[temp.length - 1]
        switch(parameter){
            case 'prename' : getPersonalData(res,parameter); break;
            case 'name' : getPersonalData(res,parameter); break;
            case 'fullname' : getPersonalData(res,parameter); break;
            case 'url' : getPersonalData(res,parameter); break;
            case 'birthdate' : getPersonalData(res,parameter); break;
            case 'obsession' : getPersonalData(res,parameter); break;
            case 'favanimal' : getPersonalData(res,parameter); break;
            case 'post' : getPersonalData(res,parameter); break;
            case 'all' : getAllPersonalData(res); break;
            default: writeMessage(400,res,"No such Parameter");
        }
    }else{
        if(req.url === "/"){
            //change Path to File on Server /home/akash/Arnes/Website/server/myownRESTAPI/
            //Path on PC C:/Private_git/myownRESTAPI/
            fs.readFile(path.join("/home/akash/Arnes/Website/server/myownRESTAPI/", 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error, check the logs');
                    writeErrorToLog(err);
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            });
        }else{
            writeMessage(400,res,"No such URL, missing a Parameter?");
        }   
    }
}

function writeErrorToLog(erorr){
    fs.appendFile(logFilePath, unixTime() + ": " + erorr + '\n', (errx) => {
        if (errx) {
          console.error('Error writing to the log file:', errx);
        } else {
          console.log('Error message logged to', logFilePath);
        }
    });
} 

function unixTime() {
    var u = new Date();
        return u.getUTCFullYear() +
        '-' + ('0' + u.getUTCMonth()).slice(-2) +
        '-' + ('0' + u.getUTCDate()).slice(-2) + 
        ' ' + ('0' + u.getUTCHours()).slice(-2) +
        ':' + ('0' + u.getUTCMinutes()).slice(-2) +
        ':' + ('0' + u.getUTCSeconds()).slice(-2) +
        '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) 
};

//Delete will not be implemented, because its a demo API
export default {
    handleRequest
}