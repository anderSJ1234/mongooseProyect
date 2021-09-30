const { Schema, model } = require("mongoose"); //Remember with the brackets you are calling the functionality you want to bring from mongoose

const UserSchema = new Schema({
  mail: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },   // if you use unique when in mongodb there is 2 sames users unique porperty doesnt work so it is useless
  password: String,
  date: { type: Date, default: new Date(), transform: (v) => v.getFullYear() },
  age: Number
});

module.exports = model("User", UserSchema);
