const fs = require("fs");

// sync...
//  fs.writeFileSync("./test.txt", "Hello world  Sync");


// Async....

// fs.writeFile("./test.txt", "Hello World Async", (err) => {})


    // const reslut = fs.readFileSync("./contacts.txt", "utf-8");

    // console.log(reslut)


// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result)
//     }

// })


fs.appendFileSync("./contacts.txt",` ${Date.now()}Hey There\n`)

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("my-docs/a/b", {recursive: true})