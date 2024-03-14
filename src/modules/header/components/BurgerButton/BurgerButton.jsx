import s from './BurgerButton.module.scss';

const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <div>
      <button className={s.btnBurgerMenu} onClick={onClick}>
        <svg width="24" height="24">
          <use
            href={`/src/shared/icons/sprite.svg#${isOpen ? 'icon-close-cross' : 'icon-burger'}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default BurgerButton;
