const Sequelize = require("sequelize");
const db = require("../db");
const Assiete = require("./Assiete");
const Menu = require("./Menu");

const MenuHasAssiete = db.define("MenuHasAssiete", {
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
    assieteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "assiete_id"
    }
}, {
    tableName: "tbl_menu_has_assiete_assoc",
    indexes: [{
        unique: true,
        fields: ["menu_id", "assiete_id"]
    }]
});

Menu.belongsToMany(Assiete, {
    as: "assietes",
    through: MenuHasAssiete,
    foreignKey: "menuId",
    sourceKey: "menuId",
    onDelete: "CASCADE"
});
Assiete.belongsToMany(Menu, {
    as: "menus",
    through: MenuHasAssiete,
    foreignKey: "assieteId",
    targetKey: "menuId"
});

module.exports = MenuHasAssiete;
