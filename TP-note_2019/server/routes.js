const app = require("./app");
const models = require("./models");
const RESTFulManager = require("./core/controller");

require("./middlewares");

// Register REST CRUD for /menus/[:menu_ID/]
app.use("/", RESTFulManager({
    model: models.Menu,
    endpoint: "menus",

    formFields: [
        "titre"
    ],
    filterFields: [
        "titre"
    ]
}));

// Register REST CRUD for /menus/:menu_id/reservations/[:reservation_id/]
app.use("/", RESTFulManager({
    model: models.Reservation,
    endpoint: "reservations",

    bases: [{
        "pointName": "menus",
        "model": models.Menu,
        "fieldName": "MenuId"
    }],

    formFields: [
        "type",
        "address"
    ],
    filterFields: [
        "type"
    ]
}));

// Register REST CRUD for /menus/:menu_id/assiettes/[:assiette_id/]
app.use("/", RESTFulManager({
    model: models.Assiette,
    endpoint: "assiettes",
    assocName: "assiettes",
    assocModel: models.MenuHasAssiette,
    foreignKey: "assietteId",

    is_many_to_many: true,

    bases: [{
        "pointName": "menus",
        "model": models.Menu,
        "fieldName": "menuId",
        "foreignKey": "menuId",
    }],

    formFields: [
        "titre",
        "type",
        "prix"
    ],
    filterFields: [
        "titre",
        "type"
    ]
}));

// Register REST CRUD for /assiettes/[:assiette_id/]
app.use("/", RESTFulManager({
    model: models.Assiette,
    endpoint: "assiettes",

    formFields: [
        "titre",
        "type",
        "prix"
    ],
    filterFields: [
        "title",
        "type"
    ]
}));

// Define the error middleware
app.use(app.errorHandler);
