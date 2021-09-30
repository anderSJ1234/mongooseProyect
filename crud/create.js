require("../connection");

const Product = require("../models/Product");

const createProducts = async () => {
  const laptopOne = new Product({
    productName:"lenovo",
    description: "this is a lenovo portable computer",
    productImg: "https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-laptop-icon-png-image_1871608.jpg",
    productDate: new Date("2021-09-30"),
    stock: 50,
    productPrice: 350,
  });

  const laptoptwo = new Product({
    productName:"msi",
    description: "this is a lenovo portable computer",
    productImg: "https://www.profesionalreview.com/wp-content/uploads/2019/03/Macintosh-512-all-in-one.jpg",
    productDate: new Date("2021-09-30"),
    stock: 50,
    productPrice: 350,
  });


  await laptopOne.save();
  await laptoptwo.save();
};

createProducts();
