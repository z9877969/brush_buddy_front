import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

export const requestCity = async (cityName) => {
  const encodedCityName = encodeURIComponent(cityName);
  const { data } = await instance.get('', {
    params: {
      modelName: 'Address',
      calledMethod: 'searchSettlements',
      methodProperties: {
        CityName: encodedCityName,
        Limit: 50,
        Page: 2,
      },
    },
  });
  return data;
};
