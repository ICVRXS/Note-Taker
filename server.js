const express = require("express");
const path = require("path");
const PORT = 8080;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});