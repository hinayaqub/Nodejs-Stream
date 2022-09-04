/**
 * ReadStream
 * use createReadStream function to read the data chunk by chunk
 * Events          data, end, error
 * Functions       read, resume, pause, finish
 */

const {createReadStream} = require('fs');

const readStream = createReadStream('./funnyVideo.mp4');
readStream.on('data', (chunk)=>{
    console.log(`Data is ${chunk.length}.`)
})

readStream.on('end', ()=>{
    console.log('!done chunk')
})
readStream.on('error', ()=>{console.error})

readStream.pause()
process.stdin.on('data', (chunk)=>{
    if(chunk.toString().trim() === 'finish')
    {
        readStream.resume()
    }
    else {readStream.read()}
})