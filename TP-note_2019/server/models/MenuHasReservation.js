const Sequelize = require("sequelize");
const db = require("../db");
const Assiete = require("./Assiete");
const Menu = require("./Menu");
const Reservation = require("./Reservation");

const MenuHasReservation = db.define("MenuHasReservation", {
    assocId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    menuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "menu_id"
    },
    reservationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "reservation_id"
    }
}, {
    tableName: "tbl_menu_has_reservation_assoc",
    indexes: [{
        unique: true,
        fields: ["menu_id", "reservation_id"]
    }]
});

Menu.belongsToMany(Reservation, {
    as: "reservations",
    through: MenuHasReservation,
    foreignKey: "menuId",
    sourceKey: "menuId",
    onDelete: "CASCADE"
});
Reservation.belongsToMany(Menu, {
    as: "menus",
    through: MenuHasReservation,
    foreignKey: "reservationId",
    targetKey: "menuId"
});

module.exports = MenuHasReservation;
