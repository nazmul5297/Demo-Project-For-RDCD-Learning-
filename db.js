const { text } = require('body-parser');
const { Pool, Client } = require('pg')
const { appConf1 } = require('./src/configs/app.config');

console.log("Database Started");

const pool = new Pool({
    user: appConf1.DB_USER,
    host: appConf1.DB_HOST,
    database: appConf1.DB_NAME,
    password: appConf1.DB_PASSWORD,
    port: appConf1.DB_PORT,
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}