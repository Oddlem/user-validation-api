// imports
const express = require("express")
const retrieve_user = require("../services/user.js").retrieve_user
const create_user = require("../services/user.js").create_user
const user_authentication = require("../services/user.js").user_authentication
const { user_schema } = require("../schema/user.js")

// routers
const router = express.Router()

// endpoints
// router.get("/sign-in", async (req, res) => {
//     const { error } = user_schema.validate(req.query)

//     if (error)
//         return res.status(400).send(error.details[0].message)

//     const result = await retrieve_user(req.query)

//     return res.status(200).send(result.rows)
// })

router.post("/sign-up", async (req, res) => {
    const { error } = user_schema.validate(req.query)
    const { username, password } = req.query

    if (error)
        return res.status(400).send(error.details[0].message)
        // if (username !== username || password !== password) {
        //     return res.status(400).send("Username or password are incorrect")
        // }
    const { user_token } = await user_authentication(username, password) 


    const result = await create_user(req.query).catch(err => {
        if (err.code === '23505') {
            return res.status(400).send("Username already exists")
        } 
    
    })
    return res.status(200).send(result.rows)
})

router.get("/protected", (req, res) => {

})

// exports
module.exports = router