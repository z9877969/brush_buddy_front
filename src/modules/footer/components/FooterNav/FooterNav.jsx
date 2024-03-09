import s from './FooterNav.module.scss';

const FooterNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <a href="#" className={s.navListItemLink}>
            Головна
          </a>
        </li>
        <li className={s.navListItem}>
          <a href="#" className={s.navListItemLink}>
            Про БрашБадді
          </a>
        </li>
        <li className={s.navListItem}>
          <a href="#" className={s.navListItemLink}>
            Товари
          </a>
        </li>
        <li className={s.navListItem}>
          <a href="#" className={s.navListItemLink}>
            Блог
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
