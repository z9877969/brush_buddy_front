import LangSwitcherMobile from '../LangSwitcherMobile/LangSwitcherMobile';
import MobileNav from '../MobileNav/MobileNav';
import s from './MobileMenu.module.scss';

const MobileMenu = ({ isOpen }) => {
  return (
    <div className={`${s.mobileMenuContainer} ${isOpen ? s.open : ''}`}>
      <div className={s.mobileMenuWrap}>
        <MobileNav />
        <LangSwitcherMobile />
      </div>
    </div>
  );
};

export default MobileMenu;
