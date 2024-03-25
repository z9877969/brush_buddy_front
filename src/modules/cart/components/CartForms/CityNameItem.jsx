import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import s from './CityNameItem.module.scss';
import { selectCityData } from '@redux/novaPoshta/selectorsNovaPoshta';

const CityNameItem = ({ handleCityName }) => {
  const cityData = useSelector(selectCityData);

  const handleCityClick = (Present) => {
    const firstCommaIndex = Present.indexOf(',');

    if (firstCommaIndex !== -1) {
      const trimmedStr = Present.substring(0, firstCommaIndex);
      handleCityName(trimmedStr);
    } else {
      handleCityName(Present);
    }
  };

  return (
    <ul className={s.cityNameList}>
      {Array.isArray(cityData) &&
        cityData.map(({ Present }) => (
          <li
            onClick={() => handleCityClick(Present)}
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
