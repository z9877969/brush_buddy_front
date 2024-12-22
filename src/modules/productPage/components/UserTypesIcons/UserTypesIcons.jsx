import clsx from 'clsx';
import s from './UserTypesIcons.module.scss';
import { sprite } from 'shared/icons';
import { PRODUCT_TYPES } from 'shared/constants';

const typesTextDict = {
  [PRODUCT_TYPES.CHILD]: 'для дітей',
  [PRODUCT_TYPES.ADULT]: 'для дорослих',
  [PRODUCT_TYPES.ANIMAL]: 'для тваринок',
};

const UserTypesIcons = ({ userTypes = [] }) => {
  return (
    userTypes.length > 0 && (
      <div className={s.wrapper}>
        {userTypes.map((el) => (
          <p key={el} className={clsx(s[el], s.textWrapper)}>
            <span className={clsx(s.text, s[el])}>{typesTextDict[el]}</span>
            <svg className={clsx(s[el], s.icon)}>
              <use href={`${sprite}#icon-bage-${el}`}></use>
            </svg>
          </p>
        ))}
      </div>
    )
  );
};

export default UserTypesIcons;
