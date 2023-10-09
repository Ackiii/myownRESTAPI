/**
 * My own vanilla Rest API with Node.js, probably will be used on my website
 * Author: Arnes Kulenovic
 * 
 * TODO: Build a Switch case to hit the endpoints GET POST / methods to retriev the data in controller
 */

//Node Library needed for the Requests
const http = require('http')

//The Data we will be able to send back
const { getPersonalData,getAllPersonalData } = require('./Arnes/Website/server/myownRESTAPI/controllers/personalDataController.js')

//Endpoint that handles the actual request
const server = http.createServer((req, res) => {
    //if (req.url == xx && req.method === 'GET')
    //TODO check if the regex is fine
    //regex match for url -> req.url.match(/\/api\/data\/([a-z]+)/)
    return getPersonalData(req,res)
})

//Check the Port where to listen, might be already set in the env otherwise 5000
const PORT = process.env.PORT || 5000

//npm run dev
server.listen(PORT, () => console.log(`listening on port ${PORT}`))