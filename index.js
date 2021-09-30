require("./connection")

const Product = require("./models/Product")
const User = require("./models/User")
const laptop = new Product({
    productName:"Asus Gforce" ,
  description:"this is a product description 2" ,
  productImg: "http://2.bp.blogspot.com/-d1pkC669LfA/UxTkZ656qtI/AAAAAAAAOmU/th_oq7znOhg/s1600/emprendedor-online-objetos-informaticos.jpg",
  productDate: "27/01/2021",
  stock: 300,
  productPrice: 675.35,
})

const NewUser = new User({
  mail: "gilberto@gmail.com",
  name: "giles12",
  password: "gripa3131",       // remenber encrypt the password for security 
});

NewUser.save((err, document) => {
  err
  ? console.log(err)
  : console.log(document)
})

laptop.save((err, document) => {
    err
    ? console.log(err)
    : console.log(document)
})
console.log(laptop)