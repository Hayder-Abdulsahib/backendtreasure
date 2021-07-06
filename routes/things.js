const express = require("express");
const router = express.Router();
const passport = require("passport");

const { treasureList, garbageList } = require("../controllers/thingController");

router.get(
  "/treasure",
  passport.authenticate("jwt", { session: false }),
  treasureList
);

router.get("/garbage", garbageList);

module.exports = router;
