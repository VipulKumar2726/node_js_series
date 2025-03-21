const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express")

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Home page")
})
app.get("/about", (req, res) => {
    return res.send("Hello From About page")
})

function myHandler(req, res)  {
    if (req.url === "/favicon.ico") {
        return res.end();
    }
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl)
    // Append log to file asynchronously
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to file", err);
        }
    });

    // Handle different routes
    switch (myUrl.pathname) {
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            const usename = myUrl.query.myname; 
             res.end(`Hi, ${usename}`)
            // res.end("I am Vipul.");
            break;
            case "/search":
            const search = myUrl.query.search_query; 
             res.end("Here are your for " + search)
            
             case "/signup":
                if (req.method === "GET") {
                    res.end("This is a signup form.")
                } else if (req.method === "POST") {
                    // DB Query
                    res.end("Success")
                }
            break;
        default:
            res.end("404 Not Found");
    }
};
const myServer = http.createServer(app)

myServer.listen(8000, () => {
    console.log("Server Started on port 8000!");
});
