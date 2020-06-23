const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});