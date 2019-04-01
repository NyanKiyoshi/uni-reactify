const Sequelize = require('sequelize');
const db = require("../db");

const Assiete = db.define("Assiete", {
    titre: {
        type: Sequelize.STRING,
        allowNull: false
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

module.exports = Assiete;
