const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 8080;
const app = express();

app.use(express.static("public"));
app.use(htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});