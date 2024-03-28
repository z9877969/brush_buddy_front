import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://brushbuddy-a6cf0-default-rtdb.europe-west1.firebasedatabase.app/',
});

const listDataKeys = [
  'images',
  'colors',
  'flavors',
  'volume',
  'watermark',
  'type',
  'ageType',
];

const setProductEmptyFields = (product) => {
  listDataKeys.forEach((key) => {
    if (product[key]) return;
    product[key] = [];
  });
  return product;
};

export const getProductsApi = () => {
  return instance.get('/products.json').then(({ data }) => {
    const updatedData =
      data?.map((el) => {
        return setProductEmptyFields(el);
      }) || [];
    return updatedData;
  });
};

export const getProductById = (id) => {
  return instance
    .get(`/products/${id}.json`)
    .then(({ data }) => (data ? setProductEmptyFields(data) : data));
};
