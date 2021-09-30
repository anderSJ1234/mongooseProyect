require("./connection");

const User = require("./models/User");

async function createUsers() {
  const userOne = new User({
    mail: "gip@gmail.com",
    name: "gip",
    password: "12345",
    date: new Date("2021-09-30"),
  });

  const userTwo = new User({
    mail: "done@gmail.com",
    name: "done",
    password: "123345",
    date: new Date("2021-09-30"),
  });

  await userOne.save();

  await userTwo.save();
  console.log(userOne, userTwo);
  return userOne, userTwo;
}

createUsers()
  