const fs = require("fs");
const os = require("os");

console.log(os);

// Blocking 
// console.log("1")
//  const result = fs.readFileSync("contacts.txt", "utf-8");

//  console.log(result);

//  console.log("2")

// Non-Blocking 
// console.log("1")
// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//  console.log(result);
    
// });


//  console.log("2")


 // Defaull Thread pool Size = 4
 //// Max? - 8core cpu - 8