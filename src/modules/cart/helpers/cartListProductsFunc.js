export function totalPrice(products) {
  let total = products.reduce((acc, product) => {
    const price = parseFloat(product.price);
    const quantity = parseInt(product.amount);
    const discountedPrice = parseFloat(product.salePrice);

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
