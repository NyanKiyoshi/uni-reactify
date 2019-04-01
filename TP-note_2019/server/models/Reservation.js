const Sequelize = require('sequelize');
const db = require("../db");

const Reservation = db.define("Reservation", {
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creneau: {
        type: Sequelize.ENUM("midi", "soir"),
        allowNull: false
    }
});

module.exports = Reservation;
