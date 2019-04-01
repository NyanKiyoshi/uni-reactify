const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, 'test.env')
});

const lazyExports = {
    Headers: {},
};

beforeEach(async function () {
    const db = require("../db");
    const models = require("../models");

    await db.sync({ force: true }).then(async value => {
        const menuSalade = await models.Menu.create({
            titre: "Salade"
        });

        const menuViande = await models.Menu.create({
            titre: "Viande"
        });

        const assietteBlanche = await menuViande.createAssiette({
            titre: "Sauce blanche, Cèleri",
            type: "entree",
            prix: 5,
        });

        const assietteViance = await models.Assiette.create({
            titre: "Blah",
            type: "entree",
            prix: 7,
        });

        await menuViande.createReservation({
            nom: "John Doe",
            creneau: "midi"
        });
    });

});

module.exports = lazyExports;
