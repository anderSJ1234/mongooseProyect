require("../connection")


const User = require("../models/User")


async function getUser(){
    const user = await User.findOne({mail: "clark@gmail.com"})
    console.log(user)
}

getUser()