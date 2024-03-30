import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

const getBody = (partCityName) => ({
  apiKey: 'fd98607b38c9aafeba92696d45e45cb5',
  modelName: 'Address',
  calledMethod: 'searchSettlements',
  methodProperties: {
    CityName: partCityName,
    Limit: '50',
    Page: '1',
  },
});

const getDepartment = (fullCityName) => ({
  apiKey: 'fd98607b38c9aafeba92696d45e45cb5',
  modelName: 'Address',
  calledMethod: 'getWarehouses',
  methodProperties: {
    CityRef: fullCityName,
  },
});

export const requestCity = async (partCityName) => {
  const response = await instance.post('', getBody(partCityName));
  return response.data;
};

export const requestDepartment = async (fullCityName) => {
  const response = await instance.post('', getDepartment(fullCityName));
  return response.data;
};
