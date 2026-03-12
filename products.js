// products.js
let products = [];

// Function to add product
function addProduct(name, category, priceINR, discount, stock, images, whatsapp){
  const id = products.length ? products[products.length-1].id + 1 : 1;
  const priceAfterDiscount = (priceINR * (1 - discount/100)).toFixed(2);
  products.push({id,name,category,priceINR,discount,priceAfterDiscount,stock,images,whatsapp});
}
