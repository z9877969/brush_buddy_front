import s from './Color.module.scss';

export const Color = ({ value }) => {
  return (
    <p className={s.colorText}>
      Виберіть колір: <span className={s.selectColorText}>{value}</span>
    </p>
  );
};
