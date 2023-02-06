const express = require("express");
require("dotenv").config();
const path = require("path");
const https = require('https');
const http = require('http');










const app = express();
const PORT = process.env.port || 4000;
app
    .use(express.json())
    .use(express.urlencoded({ extended: true }));


app.get("/api", (req, res) =>
{
    res.json({ "well": "done" })
});

app.get("/api/login", (req, res) =>
{
    // res.json({ "logiunn": "done" })
    res.redirect("https://gymwebapp1.vercel.app/login")
});

app.get("/api/loginnn", (req, res) =>
{
    res.json({ "logiunn": "done" })
    // res.redirect("https://gymwebapp1.vercel.app/login")
});







app.listen(PORT, () =>
{
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;