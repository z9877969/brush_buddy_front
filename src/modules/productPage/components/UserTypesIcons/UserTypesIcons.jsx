import s from './UserTypesIcons.module.scss';
import { sprite } from 'shared/icons';

const UserTypesIcons = ({ userTypes = [] }) => {
  return (
    userTypes.length > 0 && (
      <div className={s.wrapper}>
        {userTypes.map((el) => (
          <svg key={el} className={s[el]}>
            <use href={`${sprite}#icon-bage-${el}`}></use>
          </svg>
        ))}
      </div>
    )
  );
};

export default UserTypesIcons;
