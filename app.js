// imports
const express = require("express")
const userRouter = require("./resources/user.js")
const bodyParser = require("body-parser")

// configs
const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())
app.use("/user", userRouter)

// initialization
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})