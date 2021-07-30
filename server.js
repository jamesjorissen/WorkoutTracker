
const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

require("./routes/APIroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
    console.log(`App running on this port: ${PORT}!`);
});