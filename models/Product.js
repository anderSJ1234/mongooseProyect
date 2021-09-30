const { Schema, model } = require("mongoose"); //Remember with the brackets you are calling the functionality you want to bring from mongoose

const ProductSchema = new Schema({
  productName: String,
  description: String,
  productImg: String,
  productDate: { type: Date, default: new Date(), transform: (v) => v.getFullYear() },
  stock: Number,
  productPrice: { Number, default: 0 },
});


module.exports = model("Product", ProductSchema)