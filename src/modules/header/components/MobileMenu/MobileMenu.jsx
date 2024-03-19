import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LangSwitcherMobile from '../LangSwitcherMobile/LangSwitcherMobile';
import MobileNav from '../MobileNav/MobileNav';
import s from './MobileMenu.module.scss';

const MobileMenu = ({ isOpen }) => {
  const [isMenuOpen, setMenuOpen] = useState(isOpen);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.mobileMenuContainer} ${isMenuOpen ? s.open : ''}`}>
      <div className={s.mobileMenuWrap}>
        <MobileNav />
        <LangSwitcherMobile handleMenuToggle={handleMenuToggle} />
      </div>
    </div>
  );
};

export default MobileMenu;
