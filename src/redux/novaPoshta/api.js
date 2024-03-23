import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

const getBody = (cityName) => ({
  apiKey: 'fd98607b38c9aafeba92696d45e45cb5',
  modelName: 'Address',
  calledMethod: 'searchSettlements',
  methodProperties: {
    CityName: cityName,
    Limit: '50',
    Page: '1',
  },
});

export const requestCity = async (cityName) => {
  const response = await instance.post('', getBody(cityName));
  return response.data;
};
