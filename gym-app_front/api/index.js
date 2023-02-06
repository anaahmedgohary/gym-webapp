const express = require("express");
const path = require("path");










const app = express();
const PORT = process.env.port || 4000;
app
    .use(express.json())
    .use(express.urlencoded({ extended: true }));


app.get("/api", (req, res) =>
{
    res.json({ "well": "done" })
});







app.listen(PORT, () =>
{
    console.log(`Server listening on ${PORT}`);
})