require("../connection");

const User = require("../models/User");


/* const someFunction = async () => {
    const user =await User.findOne({mail: "clark@gmail.com"});
    console.log(user);
    user.password = "myNewPassword";
    user.save()
} */

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({mail: "joe@gmail.com"}, 
    {age: 27}, 
    {new: true})

    console.log(user)
}
/* async function updateUsers(){
    const user = await User.updateOne( {mail : "clark@gmail.com"} , {
        password : "newPassword"
    })

    console.log(user)
}; */

otherFunction()
/* someFunction() */
/* updateUsers() */