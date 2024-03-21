import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LangSwitcherMobile from '../LangSwitcherMobile/LangSwitcherMobile';
import MobileNav from '../MobileNav/MobileNav';
import s from './MobileMenu.module.scss';
import { useMedia } from 'hooks/useMedia';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { pathname } = location;
  const media = useMedia();

  useEffect(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line
  }, [location, pathname]);

  return (
    <div className={`${s.mobileMenuContainer} ${isOpen ? s.open : ''}`}>
      <div className={s.mobileMenuWrap}>
        <MobileNav />
        {media.isMobile && <LangSwitcherMobile />}
      </div>
    </div>
  );
};

export default MobileMenu;
