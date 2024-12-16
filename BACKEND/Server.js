const http = require('http');
const app = require("./index.js")

const port = process.env.PORT || 3000



const Server = http.createServer(app);

Server.listen(port,()=>{
    console.log(`Server runnig on port : ${port}`)
})



