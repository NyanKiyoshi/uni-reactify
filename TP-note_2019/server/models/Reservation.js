const Sequelize = require("sequelize");
const db = require("../db");
const Menu = require("./Menu");

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

Menu.hasMany(Reservation, {as: "reservations", onDelete: "CASCADE"});
Reservation.belongsTo(Menu, { onDelete: "CASCADE" });

module.exports = Reservation;
