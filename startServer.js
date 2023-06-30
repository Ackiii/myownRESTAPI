const http = require('http')
const { getPersonalData } = require('./controllers/personalDataController.js')

const server = http.createServer((req, res) => {
    getPersonalData(req,res)
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`listening on port ${PORT}`))