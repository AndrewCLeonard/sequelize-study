var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

/**
 * connect hbs as template engine
 */
app.set("views", path.join(__dirname, "views")); // TODO: may need to move this into `public` folder
app.set("view engine", "hbs");

app.use(logger("dev")); // ??
app.use(express.json()); // ??
app.use(express.urlencoded({ extended: false })); // ??

/**
 * https://www.npmjs.com/package/cookie-parser
 * parse `Cookie` header and populate `req.cookies` with an object keyed by the cookie names
 */
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
	// Cookies that have not been signed
	console.log("Cookies: ", req.cookies);

	// Cookies that have been signed
	console.log("Signed Cookies: ", req.signedCookies);
});

/**
 * connect app to controller
 */
app.use(require("./controllers/"));

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
