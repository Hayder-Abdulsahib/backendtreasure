const { Thing } = require("../db/models");

// exports.thingFetch = async (thingId, next) => {
//   try {
//     const thing = await Thing.findByPk(thingId);
//     return thing;
//   } catch (error) {
//     next(error);
//   }
// };

exports.treasureList = async (req, res, next) => {
  try {
    const things = await Thing.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        isTreasure: true,
      },
    });
    res.json(things);
  } catch (error) {
    next(error);
  }
};

exports.garbageList = async (req, res, next) => {
  try {
    const things = await Thing.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: {
        isTreasure: false,
      },
    });
    res.json(things);
  } catch (error) {
    next(error);
  }
};
