require("./connection");

const Product = require("./models/Product");

async function main() {
  const product = new Product({
    productName: "keyboard 20A",
    description: "this is the best product for your daily work",
    productImg:
      "https://cdn.pixabay.com/photo/2015/07/17/22/44/student-849828__340.jpg",
    productDate: "30/09/2021",
    stock: 100,
    productPrice: 225,
  });

  const productSaved = await product.save();
  return productSaved;
}

main()
  .then((productSaved) => console.log(productSaved))
  .catch((err) => console.log(err));
