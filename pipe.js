/**
 * Using pipe function to write the data into file from readStream 
 * rather than calling the events of readStrema or writeStream
 * 
 */

// const {createReadStream, createWriteStream} = require('fs');
// const readStream =  createReadStream('./funnyVideo.mp4')
// const writeStream = createWriteStream('./copyFunnyVideo.mp4')
// readStream.pipe(writeStream).on('error', ()=>{console.error})

/**
 * Write into text file using the pipe method and taking the input from user
 */


 const { createWriteStream} = require('fs');
 const writeStream = createWriteStream('./fileData.txt')


 process.stdin.pipe(writeStream).on('error', ()=>{ console.log(`Error is ${error}`);})
 

