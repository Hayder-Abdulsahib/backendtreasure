const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true, //this is optional but it prefer to put it
    },
    isTreasure: {
      type: DataTypes.BOOLEAN,
    },
  });

  SequelizeSlugify.slugifyModel(Thing, {
    source: ["name"],
  });

  return Thing;
};
