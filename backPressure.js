/**
 * WriteStream which will be start after reading the the data using readStream and writing the data
 * use createWriteStream function to write the data chunk by chunk
 * Some time the speed of reading data is greater than writing data
 * In that case there is need to keep the track of either writing stream is full or not which is
 * called back Pressure
 * 
 * One way is to handle it using highWaterMark to high value
 * Events          drian, close
 * Functions       end, write
 */

const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./funnyVideo.mp4");
const writeStream = createWriteStream("./copyFunnyVideo.mp4", {
    highWaterMark: 125658899
});
readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  // console.log(`Data is ${chunk.length}.`);
  if (result ==  false) {
    readStream.pause();
  }
});

readStream.on("end", () => {
  writeStream.end();
  console.log("!done chunk");
});
readStream.on("error", () => {
  console.error;
});
writeStream.on("close", () => {
  console.log("file is copied");
});

writeStream.on("drain", () => {
  console.log("Data is drained");
  readStream.resume();
});



const http =  require("http");
const server = http.createServer((req, res)=>{
  res.writeHead(200, {'content-Type':'json'})
  res.end('Welcome Viewer')
})

server.listen(2000)