import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { sprite } from 'shared/icons';
import s from './BurgerButton.module.scss';

const BurgerButton = ({ onClick, isOpen }) => {
  const location = useLocation();
  useEffect(() => {
    if (isOpen) {
      onClick(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);
  return (
    <div>
      <button className={s.btnBurgerMenu} onClick={onClick}>
        <svg width="24" height="24">
          {isOpen ? (
            <use href={`${sprite}#icon-close-cross`}></use>
          ) : (
            <use href={`${sprite}#icon-burger`}></use>
          )}
        </svg>
      </button>
    </div>
  );
};

export default BurgerButton;
