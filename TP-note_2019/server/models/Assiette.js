const Sequelize = require('sequelize');
const db = require("../db");

const Assiette = db.define("Assiette", {
    titre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.ENUM("entree", "plat", "dessert"),
        allowNull: false
    },
    prix: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Assiette;
