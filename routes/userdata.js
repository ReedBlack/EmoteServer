const express = require("express");
const router = express.Router();
const queries = require("../queries/queries_userdata");

router.get("/", (request, response, next) => {
    queries
        .list()
        .then(userdatas => {
            response.json({
                userdatas
            });
        })
        .catch(next);
});

router.get("/:userdata_id", (request, response, next) => {
    queries
        .read(request.params.userdata_id)
        .then(userdata => {
            userdata
                ?
                response.json({
                    userdata
                }) :
                response.status(404).json({
                    message: "Not found"
                });
        })
        .catch(next);
});

router.post("/", (request, response, next) => {
    queries
        .create(request.body)
        .then(userdata => {
            response.status(201).json({
                userdata: userdata
            });
        })
        .catch(next);
});

router.delete("/:userdata_id", (request, response, next) => {
    queries
        .delete(request.params.userdata_id)
        .then(() => {
            response.status(204).json({
                deleted: true
            });
        })
        .catch(next);
});

router.put("/:userdata_id", (request, response, next) => {
    queries
        .update(request.params.userdata_id, request.body)
        .then(userdata => {
            response.json({
                userdata: userdata[0]
            });
        })
        .catch(next);
});

module.exports = router;