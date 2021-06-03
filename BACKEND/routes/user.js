const express = require('express');
const router = express.Router();
const { login,getAllUser,getUserByID} = require('../controller/user-controller');


router.get('/user', getAllUser);
/**
 * @swagger
 * /api/v0/user/{id}:
 *   get:
 *     summary: Retrieve a single user.
 *     description: Retrieve a single user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Get
 */
router.get('/user/:id',getUserByID);

router.post('/login',login);

module.exports = router;