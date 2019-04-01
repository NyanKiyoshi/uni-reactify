const Sequelize = require("sequelize");
const db = require("../db");
const Assiette = require("./Assiette");
const Menu = require("./Menu");

const MenuHasAssiette = db.define("MenuHasAssiette", {
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
    assietteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "assiette_id"
    }
}, {
    tableName: "tbl_menu_has_assiette_assoc",
    indexes: [{
        unique: true,
        fields: ["menu_id", "assiette_id"]
    }]
});

Menu.belongsToMany(Assiette, {
    as: "assiettes",
    through: MenuHasAssiette,
    foreignKey: "menuId",
    sourceKey: "menuId",
    onDelete: "CASCADE"
});
Assiette.belongsToMany(Menu, {
    as: "menus",
    through: MenuHasAssiette,
    foreignKey: "assietteId",
    targetKey: "menuId"
});

module.exports = MenuHasAssiette;
