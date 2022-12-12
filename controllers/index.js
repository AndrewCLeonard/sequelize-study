const router = require("express").Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

const homeRoutes = require("./home-routes");
router.use("/", homeRoutes);

// const usersRouter = require("./routes/users");
// router.use("/users", usersRouter);

module.exports = router;
