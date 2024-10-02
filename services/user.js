// imports
const { v4: uuidv4 } = require("uuid")
const {create_user_dao, retrieve_user_dao} = require("../dao/user.js")
const jwt = require("jsonwebtoken")

// configs
const secret_Key = process.env.JWT_KEY

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

    const user_token = jwt.sign(
        {id: user.id, username: user.password},
        secret_Key
    )
    console.log({user_token})
    return { user_token }
}

module.exports = {
    create_user,
    retrieve_user,
    user_authentication
}