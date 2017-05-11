import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    response.json({success: true});
});

// TODO
// - Add GET for all data /data - return data + 200
// - Add POST to add new data /data - return 201
// - Add GET for single data element /data/:id -200 / 404
// - Add PUT to update single data element /data/:id - 200/204 (no content)/4040
// - Add DELETE to delete single data element /data/:id - 200/404
// - Add authentication - basic auth - 'auth' -> 'key:' (no password) + base64 encoded - 401 if failed

export default router;
