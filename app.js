const express = require("express");
const db = require("./db/models");

const thingRoutes = require("./routes/things");
const userRoutes = require("./routes/users");

const cors = require("cors");

const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize()); //it must be before the routes
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/things", thingRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  const err = new Error("Path Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
