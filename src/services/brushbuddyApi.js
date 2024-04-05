import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2023',
});

// const SECRET_KEY

export const sendOrder = async (order) => {
  instance.post('/order', order);
};
