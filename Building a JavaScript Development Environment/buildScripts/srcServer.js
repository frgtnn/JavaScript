import express from "express";
import path from "path";
import open from "open";

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});

// node buildScripts/srcServer.js to start our server from console.
// Sharing work-in-progress
//localtunnel - esasiet setup, ultra-versatile
//ngrok - easy setup, secure
//vercel, surge - no firewall hole, hosting persists. Vercel hosts node, surge supports only static files.

//** Automation!
//bit.ly/npmvsgulp

//Babel vs TyeScript
