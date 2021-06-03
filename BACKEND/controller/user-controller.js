
const pool = require('../helpers/database');
const helperUtils = require('../helpers/utils');

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        const sqlGetUser = 'SELECT  id,email,role FROM user WHERE email=? AND password=?';
        const rows = await pool.query(sqlGetUser, [email, password]);
        if (rows.length > 0) {

            //const isValid = await bcrypt.compare(password,rows[0].password)
            res.status(200).json(rows);
        } else {
            res.status(400).send({ error:"Invalid email or password" });
        }


    } catch (error) {
        res.status(400).send({ error:error.message })
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const sqlQuery = 'SELECT id, name, email, role FROM user';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(helperUtils.sort(rows));
    } catch (error) {
        res.status(400).send({error:error.message})
    }

}
const getUserByID = async (req, res, next) => {
    try {
        const sqlQuery = 'SELECT id, name, email, role FROM user WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
module.exports = {
    login,
    getAllUser,
    getUserByID
}