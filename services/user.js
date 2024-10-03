// imports
const { v4: uuidv4 } = require("uuid")
const {create_user_dao, retrieve_user_dao, create_token_dao} = require("../dao/user.js")
const jwt = require("jsonwebtoken")

// configs
const secret_key = `${process.env.JWT_KEY}`

// data transformation

const create_user = async function (data) {
    const username = data.username
    const password = data.password
    const id = uuidv4()
    const created_at = new Date()
    const updated_at = new Date()
    const deleted_at = null

    const result = await create_user_dao({
        username,
        password,
        id,
        created_at,
        updated_at,
        deleted_at
    })

    return result
}

const retrieve_user = async function (data) {
    const result = await retrieve_user_dao(data)

    return result
}

const user_authentication = async function (username, password) {
    const user = await retrieve_user(username)

    if (username !== username) {
        throw ("User doesn't exist")
    }
    if (password !== password) {
        throw ("Incorrect password")
    }

    const user_id = uuidv4()
    const id = uuidv4()
    const user_token = await jwt.sign(
        {id: user.id, username: user.password},
        secret_key
    )
    const created_at = new Date()
    const updated_at = new Date()
    const deleted_at = null

    const result = await create_token_dao({
        user_id,
        id,
        user_token,
        created_at,
        updated_at,
        deleted_at
    })

    console.log(result)
    return result
}

module.exports = {
    create_user,
    retrieve_user,
    user_authentication
}