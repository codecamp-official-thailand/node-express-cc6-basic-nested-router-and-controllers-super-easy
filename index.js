const express = require("express");
const app = express();
const numberRoutes = require("./routes/number");
const messageRoutes = require("./routes/message");

app.use("/number", numberRoutes);
app.use("/message", messageRoutes);

app.listen(8000, () => {
    console.log("Server is running");
});