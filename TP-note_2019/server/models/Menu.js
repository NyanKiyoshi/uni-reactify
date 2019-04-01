const Sequelize = require("sequelize");
const db = require("../db");

const Menu = db.define("Menu", {
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Menu;
