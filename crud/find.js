require("../connection");

const Product = require("../models/Product");

async function main() {
    const products = await Product.find({productName : "Asus"})
    console.log(products)
}

main();
