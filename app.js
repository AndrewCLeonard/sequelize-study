var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));

/**
 * http://expressjs.com/en/api.html#express.json
 * built-in Express middleware
 * parses incoming requests with JSON
 * Only looks at requests where the `Content-Type` header matches the `type` option
 * If the `Content-Type` header matches JSON, then a new body object containing parsed data is populated on the `request` objcet (`req.body`)
 * If no body to parse, returns empty object ({})
 */
app.use(express.json());

/**
 * http://expressjs.com/en/api.html#express.urlencoded
 * built-in Express middleware
 * parses incoming requests only with urlencoded payloads
 * Only looks at requests where the `Content-Type` header matches the `type` option
 * If it matches, a new `body` object containing parsed data populated on the `request` object (`req.body`)
 * returns empty object ({}) if
 * - no body to parse
 * - `Content Type` not matched
 * - an error occured
 *
 * object will contain key-value pairs
 * - `extended` is `false`: value can be a string or array
 * - `extended` is `true`: value can be any type
 *
 */
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
