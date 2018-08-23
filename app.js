const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors")
const user = require("./routes/user.js")
const userdata = require("./routes/userdata.js")
const morgan = require("morgan")

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

app.use("/user", user);
app.use("/userdata", userdata);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;