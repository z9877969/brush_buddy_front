import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:4040/api',
  baseURL: 'https://api.brushbuddy.com.ua/api',
});

// const SECRET_KEY

export const sendOrder = async (order) => {
  instance.post('/order', order);
};

export const getFirstBuyPromo = ({ phone }) => {
  return instance.post('/promos/first', { phone }).then(({ data }) => data);
};

export const getProductsListApi = async () => {
  const { data } = await instance.get('/products');

  return data;
};

export const getProductByIdApi = async (id) => {
  const { data } = await instance.get('/products/' + id);

  return data;
};
