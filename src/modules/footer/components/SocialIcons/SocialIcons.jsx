import s from './SocialIcons.module.scss';

const SocialIcons = () => {
  return (
    <div className={s.iconsFooter}>
      <svg id="icon-instagram" className={s.iconSocial}>
        <use href="src/shared/icons/sprite.svg#icon-instagram"></use>
      </svg>
      <svg id="icon-telegram" className={s.iconSocial}>
        <use href="src/shared/icons/sprite.svg#icon-telegram"></use>
      </svg>
      <svg id="icon-viber" className={s.iconSocial}>
        <use href="src/shared/icons/sprite.svg#icon-viber"></use>
      </svg>
      <svg id="icon-facebook" className={s.iconSocial}>
        <use href="src/shared/icons/sprite.svg#icon-facebook"></use>
      </svg>
    </div>
  );
};

export default SocialIcons;
