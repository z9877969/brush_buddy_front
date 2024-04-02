export const createTgMessage = (orderData) => {
  const minTab = Array(4).fill(' ').join('');
  const middleTab = Array(6).fill(' ').join('');

  const productsList = orderData.products.reduce((acc, el, i) => {
    return (
      acc +
      `${i > 0 ? '\n' : ''}<b><i>${i + 1}. ${el.title}</i></b>${el.color ? `\n${middleTab}Колір: ` + el.name : ''}${el.flavor ? `\n${middleTab}Смак: ` + el.name : ''}${el.volume ? `\n${middleTab}Об'єм: ` + el.volume : ''}
      Кількість: ${el.amount}шт.
      Ціна: ${el.salePrice > 0 ? el.salePrice.toFixed(2) : el.price.toFixed(2)}`
    );
  }, '');
  const total = `<b>Загалом:</b> ${orderData.totalPrice}грн${orderData.promocode ? `\n${minTab}<b>Промокод:</b> ` + orderData.promocode : ''}${orderData.discount ? `\n${minTab}<b>Знижка:</b> ` + orderData.discount + '%' : ''}${orderData.discount ? `\n${minTab}<b>Сума зі знижкою:</b> ` + orderData.saleTotal : ''}`;
  const delivery = `
    <b>Телефон</b>: ${orderData.delivery.phone}
    <b>Ім'я</b>: ${orderData.delivery.name}
    <b>Місто</b>: ${orderData.delivery.city}
    <b>Відділення/Поштомат</b>: ${orderData.delivery.postOffice}
    ${orderData.delivery.comments ? '<b>Коментар</b>: ' + orderData.delivery.comments : ''}`;
  const paymentMethod =
    orderData.payment === 'card'
      ? '<b>Оплата карткою</b>'
      : '<b>Оплата при отриманні</b>';

  const message = `
    <b>Замовлення №${orderData.orderNum}</b>
    <b>==========</b>\n${productsList}
    ${total}
    ${delivery}
    ${paymentMethod}
    `;

  return message;
};
