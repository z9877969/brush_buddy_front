import axios from 'axios';
import { createTgMessage } from 'helpers';
// import { totalPrice } from 'modules/cart';

const TOKEN = '7176333432:AAH7wJvFkRPxLuWrPlix0yO44attqNZtwEA';
// отримується при перевідправці повідомлення в бот GET_MY_ID
const CHAT_ID = '-1002099110422';

const instance = axios.create({
  baseURL: `https://api.telegram.org/bot${TOKEN}`,
});

export const sendMessageTg = async (orderData) => {
  const orderNum = Math.ceil(Date.now() / 1000);
  orderData.orderNum = orderNum;
  const { data } = await instance.post('/sendMessage', {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: createTgMessage(orderData),
  });

  return { ...data, orderNum };
};
