const suite = require("./suite");

const supertest = require('supertest');
const assert = require('assert');
const errors = require("../errors");

const db = require("../db");
const models = require("../models");
const app = require('../app');
const _ = require("../routes");

exports.get_inexisting_assiette_returns_404 = function(done) {
    supertest(app)
        .get('/assiettes/555')
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

exports.get_existing_assiette_returns_valid = function(done) {
    supertest(app)
        .get('/assiettes/1')
        .set(suite.Headers)
        .expect(200)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body["titre"], "Sauce blanche, Cèleri");

            return done();
        });
};

exports.create_new_assiette = function(done) {
    supertest(app)
        .post('/assiettes')
        .set(suite.Headers)
        .send({"titre": "new assiette", "type": "plat", "prix": 5})
        .expect(201)
        .end(async function (err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body["titre"], "new assiette");

            return done();
        });
};

exports.create_non_unique_assiette = function(done) {
    supertest(app)
        .post('/assiettes')
        .set(suite.Headers)
        .send({"titre": "Blah", "type": "plat", "prix": 5})
        .expect(400)
        .end(async function (err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body['error']['status'], 400);
            assert.strictEqual(body['error']['message'], errors.ERR_RELATION_EXISTS);

            return done();
        });
};

exports.update_inexisting_assiette = function(done) {
    supertest(app)
        .put('/assiettes/555')
        .set(suite.Headers)
        .send({"titre": "updated assiette", "type": "plat", "prix": 5})
        .expect(404)
        .expect("Content-Type", /^application\/json/)
        .end(function(err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body['error']['status'], 404);

            return done();
        });
};

exports.update_existing_assiette = function(done) {
    supertest(app)
        .put('/assiettes/1')
        .set(suite.Headers)
        .send({"titre": "updated assiette", "type": "plat", "prix": 5})
        .expect(200)
        .end(async function (err, response) {
            assert.ifError(err);

            const body = JSON.parse(response.text);
            assert.strictEqual(body["id"], 1);
            assert.strictEqual(body["titre"], "updated assiette");

            return done();
        });
};

exports.delete_inexisting_assiette = function(done) {
    supertest(app)
        .delete('/assiettes/555')
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

exports.delete_existing_assiette = function(done) {
    supertest(app)
        .delete('/assiettes/1')
        .set(suite.Headers)
        .expect(204)
        .end(async function (err, response) {
            assert.ifError(err);

            await models.Assiette.findByPk(1).then(value => {
                assert.ok(!value);
            });

            return done();
        });
};
