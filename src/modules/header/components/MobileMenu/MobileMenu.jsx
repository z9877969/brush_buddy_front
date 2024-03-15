import { useState } from 'react';
import LangSwitcherMobile from '../LangSwitcherMobile/LangSwitcherMobile';
import MobileNav from '../MobileNav/MobileNav';
import s from './MobileMenu.module.scss';

const MobileMenu = ({ isOpen }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${s.mobileMenuContainer} ${isOpen ? s.open : ''}`}>
      <div className={s.mobileMenuWrap}>
        <MobileNav />
        <LangSwitcherMobile handleMenuToggle={handleMenuToggle} />
      </div>
    </div>
  );
};

export default MobileMenu;
