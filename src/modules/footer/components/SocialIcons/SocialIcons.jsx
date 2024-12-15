import { useEffect, useState } from 'react';
import { sprite } from 'shared/icons';
import { getSocialLinksApi } from 'services/brushbuddyApi';
import { useLocalRequest } from 'hooks/useLocalRequest';
import s from './SocialIcons.module.scss';

const SocialIcons = () => {
  const [socialLinks, setSocialLinks] = useState(null);

  const localRequestWrapper = useLocalRequest();

  useEffect(() => {
    const requestFn = getSocialLinksApi().then((links) =>
      setSocialLinks(links)
    );

    localRequestWrapper(requestFn);
  }, [localRequestWrapper]);

  if (!socialLinks) return null;

  return (
    <div className={s.iconsFooter}>
      <a href={socialLinks.INSTAGRAM} target="_blank">
        <svg id="icon-instagram" className={s.iconSocial}>
          <use href={sprite + '#icon-instagram'}></use>
        </svg>
      </a>
      <a href={socialLinks.TELEGRAM} target="_blank">
        <svg id="icon-telegram" className={s.iconSocial}>
          <use href={sprite + '#icon-telegram'}></use>
        </svg>
      </a>
      <a href={socialLinks.VIBER} target="_blank">
        <svg id="icon-viber" className={s.iconSocial}>
          <use href={sprite + '#icon-viber'}></use>
        </svg>
      </a>
      <a href={socialLinks.FACEBOOK} target="_blank">
        <svg id="icon-facebook" className={s.iconSocial}>
          <use href={sprite + '#icon-facebook'}></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
