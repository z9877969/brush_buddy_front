function totalPrice(products) {
  let total = products.reduce((acc, product) => {
    const price = parseFloat(product.price);
    const quantity = parseInt(product.quantity);
    return acc + price * quantity;
  }, 0);
  const fixPrice = total.toFixed(2);
  return fixPrice;
}

export default totalPrice;
