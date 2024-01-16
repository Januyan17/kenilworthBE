const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {},
    },

    // userId: { type: DataTypes.STRING, allowNull: true },
    mobile: { type: DataTypes.STRING, allowNull: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    dateOfBirth: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.BOOLEAN, allowNull: true },
  };
  const options = {
    defaultScope: {
      attributes: { exclude: ["hash"] },
    },
    scopes: {
      withPrimaryPhone: { attributes: {} },
    },
    timestamps: false,
  };

  return sequelize.define("employee", attributes, options);
  // return sequelize.define("employee", attributes, {
  //   timestamps: false,
  // });
}
