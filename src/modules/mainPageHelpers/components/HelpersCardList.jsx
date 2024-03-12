import { sprite } from 'shared/icons';

import s from './MainPageHelpers.module.scss';

const HelpersCardList = ({ helpersCardData }) => {
  return (
    <ul className={s.helpersCardUL}>
      {helpersCardData.map(({ id, title, price, text, image }) => (
        <li key={id} className={s.mainHelpersBox}>
          <div className={s.boxTitleText}>
            <div className={s.helpersBoxTitle}>
              <h3>{title}</h3>
              <button type="button">
                <svg>
                  <use href={sprite + '#icon-cart'}></use>
                </svg>
              </button>
            </div>
            <p className={s.helpersBoxPrice}>{`${price} грн`}</p>
            <p className={s.helpersBoxText}>{text}</p>
          </div>
          <img src={image} alt="photo" />
        </li>
      ))}
    </ul>
  );
};

export default HelpersCardList;
