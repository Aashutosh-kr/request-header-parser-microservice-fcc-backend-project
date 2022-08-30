// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
	res.json({ greeting: "hello API" });
});


/* req.headers */

// {
// "host": "localhost:3000",
// "connection": "keep-alive",
// "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\"",
// "sec-ch-ua-mobile": "?0",
// "upgrade-insecure-requests": "1",
// "dnt": "1",
// "user-agent": "Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
// "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
// "sec-fetch-site": "same-origin",
// "sec-fetch-mode": "navigate",
// "sec-fetch-user": "?1",
// "sec-fetch-dest": "document",
// "referer": "http://localhost:3000/",
// "accept-encoding": "gzip, deflate, br",
// "accept-language": "en-US,en;q=0.9,hi;q=0.8"
// }

// your first API endpoint...
app.get("/api/whoami", (req, res) => {
	const ip = req.ip,
		language = req.headers["accept-language"],
		software = req.headers["user-agent"];

	res.json({
		ipaddress: ip,
		language: language,
		software: software,
	});
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
