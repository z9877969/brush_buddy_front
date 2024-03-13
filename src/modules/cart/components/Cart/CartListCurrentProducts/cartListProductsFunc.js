export function totalPrice(products) {
  let total = products.reduce((acc, product) => {
    const price = parseFloat(product.price);
    const quantity = parseInt(product.quantity);
    const discountedPrice = parseFloat(product.discounted_price);

    const productPrice = discountedPrice ? discountedPrice : price;

    const productTotal = productPrice * quantity;

    return acc + productTotal;
  }, 0);

  const fixPrice = total.toFixed(2);
  return fixPrice;
}

export function totalPriceDiscount(totalPriceDisc) {
  const discount = 0.1;
  const discountedPrice = totalPriceDisc * discount;
  return discountedPrice;
}
