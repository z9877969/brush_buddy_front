import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import s from './CityNameItem.module.scss';
import { selectCityData } from '@redux/novaPoshta/selectorsNovaPoshta';
import { useEffect, useRef, useState } from 'react';

const CityNameItem = ({ handleCityName }) => {
  const cityData = useSelector(selectCityData);
  const [open, setOpen] = useState(false);
  const listRef = useRef();

  const handleCityClick = (Present) => {
    setOpen(true);
    const firstCommaIndex = Present.indexOf(',');

    if (firstCommaIndex !== -1) {
      const trimmedStr = Present.substring(0, firstCommaIndex);
      handleCityName(trimmedStr);
    } else {
      handleCityName(Present);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!listRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={listRef}>
      {open && (
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
      )}
    </div>
  );
};

export default CityNameItem;
