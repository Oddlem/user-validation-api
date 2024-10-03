const { Pool } = require("pg")

let pool = null 

const database = async function () {
    if (!pool) {
        pool = new Pool({
            user: "postgres",
            password: "changeme",
            host: "0.0.0.0",
            port: 5432,
            database: "users"
        })
        try{
            await pool.connect()
            console.log("Connection successful")
        } catch (err) {
            console.error("Could not connect to database:", (err))
        }
    }
}

const create_user_table = async function (data) {
    const sql = await pool.query(`CREATE TABLE IF NOT EXISTS users(
        username varchar,
        password varchar,
        id uuid,
        created_at timestamp,
        updated_at timestamp,
        deleted_at timestamp
        )`)
}

const create_token_table = async function (data) {
    const sql = await pool.query(`CREATE TABLE IF NOT EXISTS user_tokens(
        user_id uuid unique,
        id uuid,
        token text,
        created_at timestamp,
        updated_at timestamp,
        deleted_at timestamp
        )`)

}

database().then(() => {
    return create_user_table()
})
.then(() => {console.log("Users table already created")})
.catch(err => console.log(err))

database().then(() => {
    return create_token_table()
})
.then(() => {console.log("User_tokens table already created")})
.catch(err => console.log(err))

module.exports = { pool }