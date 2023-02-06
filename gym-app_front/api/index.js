const express = require("express");
const path = require("path");










const app = express();
const PORT = process.env.port || 4000;



app.get("/api", (req, res) =>
{
    res.json({ "well": "done" })
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../gym-app_front/dist')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, '../gym-app_front/dist', 'index.html'));
});





app.listen(PORT, () =>
{
    console.log(`Server listening on ${PORT}`);
})