const fs = require('node:fs');

const readerableStream = fs.createReadStream('./data.json', {
    encoding: 'utf-8',
    highWaterMark: 2
});

const writeableStream = fs.createWriteStream('./data2.json');

readerableStream.pipe(writeableStream);

// readerableStream.on('data', chunk => {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })