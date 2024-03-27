const orderData = {
  orderNum: 1,
  products: [
    {
      id: '45cf',
      images:
        'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
      title: 'Відбілювальна зубна паста Curaprox Be You Candy Lover Toothpaste',
      price: 288.8,
      salePrice: 188.8,
      flavor: 'Яблуко',
      colorMarker: 'green',
      quantity: 5,
      volume: '50',
    },
    {
      id: '45cf',
      images:
        'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
      title: 'Відбілювальна зубна паста Curaprox Be You Candy Lover Toothpaste',
      price: 288.8,
      salePrice: 188.8,
      flavor: 'Яблуко',
      colorMarker: 'green',
      quantity: 5,
      volume: '50',
    },
    {
      id: '45cf',
      images:
        'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
      title: 'Відбілювальна зубна паста Curaprox Be You Candy Lover Toothpaste',
      price: 288.8,
      salePrice: 188.8,
      flavor: 'Яблуко',
      colorMarker: 'green',
      quantity: 5,
      volume: '50',
    },
  ],
  delivery: {
    phone: '+3801234567',
    name: 'Bart Simpson',
    city: 'Kyiv',
    postOffice: 'відділення #32, Київ, вул. Богатирська, 15',
  },
  discount: 10,
  totalPrice: 1600,
  saleTotal: 1440,
};

export const createTgMessage = () => {
  const orderNum = Math.ceil(Date.now() / 1000);
  const productsList = orderData.products.reduce((acc, el, i) => {
    return (
      acc +
      `${i > 0 ? '\n' : ''}<b><i>${i + 1}. ${el.title}</i></b>${el.color ? 'Колір: ' + el.color : ''}
         ${el.flavor ? 'Смак: ' + el.flavor : ''}
         ${el.volume ? "Об'єм: " + el.volume : ''}
         Кількість - ${el.quantity}шт.
         Ціна: ${el.salePrice > 0 ? el.salePrice : el.price}`
    );
  }, '');
  const total = `
      <b>Загалом:</b> ${orderData.totalPrice}грн
      ${orderData.discount ? '<b>Знижка:</b> ' + orderData.discount + '%' : ''}
      ${orderData.saleTotal ? '<b>Сума зі знижкою:</b> ' + orderData.saleTotal : ''}`;
  const delivery = `
      <b>Телефон</b>: ${orderData.delivery.phone}
      <b>Ім'я</b>: ${orderData.delivery.name}
      <b>Місто</b>: ${orderData.delivery.city}
      <b>Відділення/Поштомат</b>: ${orderData.delivery.postOffice}
    `;

  const message = `
    <b>Замовлення №${orderNum}</b>
    ${productsList}
    ${total}
    ${delivery}
    `;

  return message;
};
