const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/ecommerce"
const db = mongoose.connection;

mongoose.connect(uri).catch(err => console.log(err))


db.on("open", _=> {
  console.log("database is connected to : " + uri)
}) // if you use once instead of on it will only read it 1 time

db.on("error", err => {
  console.log(err)
})