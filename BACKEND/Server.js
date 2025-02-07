const http = require('http');
const app = require("./index.js");
// const { initializeSocket } = require('./socket');


const port = process.env.PORT || 3000



const Server = http.createServer(app);

// initializeSocket(Server);

Server.listen(port,()=>{
    console.log(`Server runnig on port : ${port}`)
})



