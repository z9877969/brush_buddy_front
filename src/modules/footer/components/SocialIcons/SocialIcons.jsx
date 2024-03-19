import s from './SocialIcons.module.scss';
import { sprite } from 'shared/icons';
import { SOCIAL_NETWORKS } from 'shared/constants';
const SocialIcons = () => {
  return (
    <div className={s.iconsFooter}>
      <a href={SOCIAL_NETWORKS.INSTAGRAM} target="_blank">
        <svg id="icon-instagram" className={s.iconSocial}>
          <use href={sprite + '#icon-instagram'}></use>
        </svg>
      </a>
      <a href={SOCIAL_NETWORKS.TELEGRAM} target="_blank">
        <svg id="icon-telegram" className={s.iconSocial}>
          <use href={sprite + '#icon-telegram'}></use>
        </svg>
      </a>
      <a href={SOCIAL_NETWORKS.VIBER} target="_blank">
        <svg id="icon-viber" className={s.iconSocial}>
          <use href={sprite + '#icon-viber'}></use>
        </svg>
      </a>
      <a href={SOCIAL_NETWORKS.FACEBOOK} target="_blank">
        <svg id="icon-facebook" className={s.iconSocial}>
          <use href={sprite + '#icon-facebook'}></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
