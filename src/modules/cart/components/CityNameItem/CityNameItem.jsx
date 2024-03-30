import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import s from './CityNameItem.module.scss';
import { selectCityData } from '@redux/novaPoshta/selectorsNovaPoshta';

const CityNameItem = ({ handleCityName }) => {
  const cityData = useSelector(selectCityData);

  const handleCityClick = (Present, DeliveryCity) => {
    const firstCommaIndex = Present.indexOf(',');

    if (firstCommaIndex !== -1) {
      const trimmedStr = Present.substring(0, firstCommaIndex);
      handleCityName(trimmedStr, DeliveryCity);
    } else {
      handleCityName(Present, DeliveryCity);
    }
  };

  return (
    <ul className={s.cityNameList}>
      {Array.isArray(cityData) &&
        cityData.map(({ Present, DeliveryCity }) => (
          <li
            onClick={() => handleCityClick(Present, DeliveryCity)}
            className={s.cityNameItem}
            key={nanoid()}
          >
            {Present}
          </li>
        ))}
    </ul>
  );
};

export default CityNameItem;
