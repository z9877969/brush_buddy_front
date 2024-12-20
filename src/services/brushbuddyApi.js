import axios from 'axios';
import { reviewsCardData } from 'modules/mainPageReviews/data/reviewsCardData';

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

export const getReviewsApi = async () => {
  // const { data } = await instance.get('/reviews');
  // return data;
  return reviewsCardData;
};

export const getSocialLinksApi = async () => {
  const { data = {} } = await instance.get('/content/main-page', {
    params: {
      socialLinks: true,
    },
  });
  return (
    data.socialLinks?.reduce((acc, { url, type }) => {
      acc[type.toUpperCase()] = url;
      return acc;
    }, {}) || null
  );
};

export const getMainPageAboutImageApi = async () => {
  const { data = {} } = await instance.get('/content/main-page', {
    params: {
      aboutUrl: true,
    },
  });
  return data.aboutUrl || '';
};
