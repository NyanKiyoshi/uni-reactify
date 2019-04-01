const suite = require("./suite");

const supertest = require('supertest');
const assert = require('assert');
const errors = require("../errors");

const db = require("../db");
const models = require("../models");
const app = require('../app');
const _ = require("../routes");

exports.get_inexisting_menu_assiettes_returns_404 = function(done) {
    supertest(app)
        .get('/menus/555/assiettes')
        .set(suite.Headers)
        .expect(404)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body['error']['status'], 404);

            return done();
        });
};

exports.get_existing_menu_assiettes_returns_valid = function(done) {
    supertest(app)
        .get('/menus/2/assiettes')
        .set(suite.Headers)
        .expect(200)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body.length, 1);

            const assiette = body[0];
            assert.strictEqual(assiette["id"], 1);
            assert.strictEqual(assiette["titre"], "Sauce blanche, Cèleri");
            assert.strictEqual(assiette["type"], "entree");
            assert.strictEqual(assiette["prix"], 5);

            return done();
        });
};

exports.create_association_between_assiette_and_menu = function(done) {
    supertest(app)
        .post('/menus/2/assiettes/2')
        .set(suite.Headers)
        .expect(201)
        .end(function(err, response) {
            assert.ifError(err);
            return done();
        });
};

exports.creating_duplicate_association_between_assiette_and_menu_return_error = function(done) {
    supertest(app)
        .post('/menus/2/assiettes/1')
        .set(suite.Headers)
        .expect(400)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body['error']['status'], 400);
            assert.strictEqual(body['error']['message'], errors.ERR_RELATION_EXISTS);

            return done();
        });
};

exports.delete_association_valid_is_successful = function(done) {
    supertest(app)
        .delete('/menus/2/assiettes/1')
        .set(suite.Headers)
        .expect(204)
        .end(async function (err) {
            assert.ifError(err);

            await models.Menu.findOne({ menuId: 2, assietteId: 1}).then(value => {
                assert.ok(value);
            });

            return done();
        });
};

exports.delete_association_inexisting_is_unsuccessful = function(done) {
    supertest(app)
        .delete('/menus/2/assiettes/2')
        .set(suite.Headers)
        .expect(404)
        .end(async function (err) {
            assert.ifError(err);
            return done();
        });
};
