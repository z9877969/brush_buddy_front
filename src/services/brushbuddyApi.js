import axios from 'axios';
import { updateProductTitle } from 'helpers/updateProductTitle';

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
  const { data } = await instance.get('/variants/popular');

  return data.map(
    ({
      color,
      flavor,
      images,
      marker,
      price,
      salePrice,
      volume,
      watermark,
      quantity,
      _id: varId,
      product: { title, userType, _id: prodId },
    }) => {
      return {
        title: updateProductTitle({ title, color, flavor, volume }),
        images,
        markers: [{ varId, marker }],
        price,
        salePrice,
        watermark,
        quantity,
        varId,
        prodId,
        userType,
      };
    }
  );
};
