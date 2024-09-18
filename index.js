const fs = require('node:fs/promises');

// fs.readFile('./data.json', 'utf-8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const readFile = async () => {
    try {
        const data = await fs.readFile('./data.json', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();

// console.log('first');

// const fileContent = fs.readFileSync('./data.json', "utf-8");

// console.log(fileContent);

// console.log('second');

// fs.readFile('./data.json', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

// console.log('third');

// fs.writeFileSync('./new-file.txt', 'Hello world');
// fs.writeFile('./new-file.txt', ' Hellow again', {flag: 'a'}, error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('file written');
//     }
// });