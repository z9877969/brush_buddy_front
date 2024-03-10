import s from './Rights.module.scss';

const Rights = () => {
  return (
    <>
      <hr className={s.line} />
      <nav className={s.rights}>
        <ul className={s.rightsList}>
          <li className={s.rightsListItem}>{'\u00A9'} BrushBuddy 2024</li>
          <li className={s.rightsListItem}>Dnipro UA</li>
          <li className={s.rightsListItem}>Всі права захищені</li>
        </ul>
      </nav>
    </>
  );
};

export default Rights;
