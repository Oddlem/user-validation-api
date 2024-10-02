const Joi = require("joi")

const user_schema = Joi.object({
    username: Joi.string().min(4).required().not(null),
    password: Joi.string().min(4).required().not(null)
})

module.exports = {
    user_schema
}