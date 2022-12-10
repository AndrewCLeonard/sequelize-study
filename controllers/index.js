const router = require("express").Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

// router.use("/", indexRouter);
// router.use("/users", usersRouter);

module.exports = router;
