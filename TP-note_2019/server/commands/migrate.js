const db = require("../db");
const models = require("../models");

db.sync({ force: true }).then(async value => {
    const menuSalade = await models.Menu.create({
        titre: "Salade"
    });

    const assietteBlanche = await menuSalade.createAssiette({
        titre: "Sauce blanche, Cèleri",
        type: "entree",
        prix: 5,
    });

    await menuSalade.createReservation({
        nom: "John Doe",
        creneau: "midi"
    });
}).catch(
    reason => console.error(reason));
