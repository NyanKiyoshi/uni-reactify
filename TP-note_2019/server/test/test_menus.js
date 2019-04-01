const suite = require("./suite");

const supertest = require('supertest');
const assert = require('assert');

const db = require("../db");
const models = require("../models");
const app = require('../app');
const _ = require("../routes");

exports.listing_menus_returns_valid = function(done) {
    supertest(app)
        .get('/menus')
        .set(suite.Headers)
        .expect(200)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);

            assert.strictEqual(typeof body, typeof []);
            assert.strictEqual(body.length, 2);

            const data = body[0];
            assert.strictEqual(data["titre"], "Salade");

            return done();
        });
};


exports.getting_inexisting_menu = function(done) {
    supertest(app)
        .get('/menus/555')
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

exports.filter_menus_valid_return = function(done) {
    supertest(app)
        .get('/menus?titre=Salade')
        .set(suite.Headers)
        .expect(200)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);

            assert.strictEqual(typeof body, typeof []);
            assert.strictEqual(body.length, 1);

            return done();
        });
};

exports.filters_menus_invalid_filter = function(done) {
    supertest(app)
        .get('/menus?titre=Wow')
        .set(suite.Headers)
        .expect(200)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);

            assert.strictEqual(typeof body, typeof []);
            assert.strictEqual(body.length, 0);

            return done();
        });
};

exports.create_new_menu = function(done) {
    supertest(app)
        .post('/menus')
        .set(suite.Headers)
        .send({"titre": "The Wow Menu"})
        .expect(201)
        .end(async function (err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body["titre"], "The Wow Menu");

            return done();
        });
};

exports.update_inexisting_menu = function(done) {
    supertest(app)
        .put('/menus/555')
        .set(suite.Headers)
        .send({"titre": "hello"})
        .expect(404)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body['error']['status'], 404);

            return done();
        });
};

exports.update_existing_menu = function(done) {
    supertest(app)
        .put('/menus/1')
        .set(suite.Headers)
        .send({"titre": "hello"})
        .expect(200)
        .end(async function (err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body["id"], 1);
            assert.strictEqual(body["titre"], "hello");

            return done();
        });
};

exports.delete_inexisting_menu = function(done) {
    supertest(app)
        .delete('/menus/20')
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

exports.delete_existing_number = function(done) {
    supertest(app)
        .delete('/menus/1')
        .set(suite.Headers)
        .expect(204)
        .end(async function (err, response) {
            assert.ifError(err);

            await models.Menu.findByPk(1).then(value => {
                assert.ok(!value);
            });

            return done();
        });
};
