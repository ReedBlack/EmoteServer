const express = require('express');
const router = express.Router();
const database = require("../database-connection");
const queries = require('../queries/queries_user');
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

router.get("/", (request, response, next) => {
    queries.list().then(myuser => {
        response.json({
            myuser
        });
    }).catch(next);
});

router.get('/:user_id/userdata', (req, res, next) => {
    database('userdata')
        .innerJoin('user', 'user.user_id', 'userdata.user_id')
        .where('user.user_id', req.params.user_id)
        .then((rows) => {
            const user_userdata = camelizeKeys(rows);
            res.send(user_userdata);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:user_id", (request, response, next) => {
    queries.read(request.params.user_id).then(user => {
        user
            ?
            response.json({
                user
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(user => {
        response.status(201).json({
            user: user
        });
    }).catch(next);
});

router.delete("/:user_id", (request, response, next) => {
    queries.delete(request.params.user_id).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:user_id", (request, response, next) => {
    queries.update(request.params.user_id, request.body).then(user => {
        response.json({
            user: user[0]
        });
    }).catch(next);
});

module.exports = router;