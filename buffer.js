const fs = require('fs');
const http = require('http');
const file = './funnyVideo.mp4';
const PORT = 3000;
http.createServer((req, res)=>{
    fs.readFile(file, (error, data)=>{
        if(error){console.log(`Error is ${error}`)}
        res.writeHeader(200, {'Content-Type':'video/mp4'})
        res.end(data)
    })
}).listen(PORT, ()=>{console.log(`Buffer -Server is running on PORT ${PORT}`)})
