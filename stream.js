const fs = require('fs');
const http = require('http')
const file = './funnyVideo.mp4';
const PORT = 3000;
http.createServer((req, res)=>{
   res.writeHeader(200, {'Content-Type': 'video/mp4'})
   fs.createReadStream(file)
   .pipe(res)
   .on('error', console.error)
}).listen(PORT, ()=>console.log(`Stream -Server is running on http://localhost:${PORT}`))