import s from './Flavor.module.scss';

export const Flavor = ({ value }) => {
  return (
    <p className={s.mlText}>
      Виберіть смак:
      <span className={s.selectFlavorText}>{value}</span>
    </p>
  );
};
