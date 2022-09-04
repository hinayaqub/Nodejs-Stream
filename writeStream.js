/**
 * WriteStream which will be start after reading the the data using readStream and writing the data 
 * use createWriteStream function to write the data chunk by chunk
 * Events          drian, close
 * Functions       end, write
 */

 const {createReadStream, createWriteStream} = require('fs');

 const readStream = createReadStream('./funnyVideo.mp4');
 const writeStream = createWriteStream('./copyFunnyVideo.mp4')
 readStream.on('data', (chunk)=>{
     writeStream.write(chunk)
     console.log(`Data is ${chunk.length}.`)
 })
 
 readStream.on('end', ()=>{
     writeStream.end()
     console.log('!done chunk')
 })
 readStream.on('error', ()=>{console.error})
 writeStream.on('close', ()=>{
     console.log('file is copied')
 })
 
 // readStream.pause()
 // process.stdin.on('data', (chunk)=>{
 //     if(chunk.toString().trim() === 'finish')
 //     {
 //         readStream.resume()
 //     }
 //     else {readStream.read()}
 // })