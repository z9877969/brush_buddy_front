import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4040/api',
  // baseURL: 'https://api.brushbuddy.com.ua/api',
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

export const getBlogsApi = async () => {
  const { data } = await instance.get('/blogs');
  return data;
};

export const getPopularProductsApi = async () => {
  const { data } = await instance.get('/products/popular');
  return data;
};

export const createOrderApi = async (order) => {
  const { data } = await instance.post('/orders', order);
  return data;
};
