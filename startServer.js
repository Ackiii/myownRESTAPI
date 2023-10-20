/**
 * My own vanilla Rest API with Node.js, probably will be used on my website
 * Author: Arnes Kulenovic
 */

//Node Library needed for the Requests
import { createServer } from 'http'
import personalDataController from './controllers/personalDataController.js';
import fs from 'fs';
import path from 'path';

const { handleRequest } = personalDataController;
//Check the Port where to listen, might be already set in the env otherwise 5000
const PORT = process.env.PORT || 5000

//Endpoint that handles the actual request
const server = createServer((req, res) => {
    handleRequest(req,res);
    /**
     * if(req.url.match(/\/api\/data\/([a-z]+)/)){
        handleRequest(req,res);
    }else{
        fs.readFile(path.join("C:/Private_git/myownRESTAPI/", 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    */
})

//npm run dev
server.listen(PORT, '0.0.0.0', () => {
    const address = server.address();
    const host = address.address === '::' ? 'localhost' : address.address;
    console.log(`Server is listening on http://${host}:${address.port}`);
});