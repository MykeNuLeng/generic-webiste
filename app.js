const express = require("express");
const path = require("path");
const jsonFetch = require("./public/json_fetch");

const app = express();
const port = process.env.PORT || 8888;

//setting middleware
app.use(express.static(__dirname + "/public")); //Serves resources from public folder

//homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//calling api from snowplow-micro
app.get("/api", function (req, res) {
  jsonFetch.getScore().then((score) => {
    res.json(score);
  });
});

//ski poll answer page, redirects to home page after 2s
app.get("/ski", function (req, res) {
  res.sendFile(path.join(__dirname, "/ski.html"));
});

//snowboard poll page, redirects to home page after 2s
app.get("/snowboard", function (req, res) {
  res.sendFile(path.join(__dirname, "/snowboard.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
