export function totalPrice(products) {
  let total = products.reduce((acc, product) => {
    const curPrice = product.salePrice || product.price;
    const quantity = parseInt(product.amount ? product.amount : 1);
    const productTotal = curPrice * quantity;
    return acc + productTotal;
  }, 0);

  return total;
}

export function totalPriceDiscount(totalPriceDisc, discount) {
  //const discount = 0.1;
  const discountedPrice = (totalPriceDisc * discount) / 100;
  return discountedPrice;
}
