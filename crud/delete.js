require("../connection")

const Product = require ("../models/Product")

const someFunction = async () => {

    const deletedProducts = await Product.deleteMany({productName: /Asus/}) // you can to delete 1 if you want
    const deletedProducts2 = await Product.findOneAndDelete({productName: /Asus/})
    const deletedProducts3 = await Product.findOneAndDelete({productName: /As/})
    const deletedProducts4 = await Product.findByIdAndDelete("61559aad249a89c89baae6ee")
   
    console.log(deletedProducts, deletedProducts2, deletedProducts3, deletedProducts4)
}

someFunction()