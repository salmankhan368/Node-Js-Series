const http=require("http");
const fs=require("fs");


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New request received\n`;

    fs.appendFile("log.text", log, (err) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Could not write request log");
            return;
        }

        res.end("Hello From Server Again");
    });
});
myServer.listen(8000, () => console.log("server started"));