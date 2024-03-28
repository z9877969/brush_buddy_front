import { useCallback, useState } from 'react';
// import { Link } from 'react-router-dom';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import CartButton from '../CartButton/CartButton';
import DiscountReminder from '../DiscountReminder/DiscountReminder';
import HeaderNav from '../HeaderNav/HeaderNav';
import s from './Header.module.scss';
import { Container, Logo } from 'shared/components';
import BurgerButton from '../BurgerButton/BurgerButton';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useMedia } from 'hooks/useMedia';

const Header = () => {
  const [isDiscountReminderOpen, setDiscountReminderOpen] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const media = useMedia();

  const handleCloseDiscountReminder = () => {
    setDiscountReminderOpen(false);
  };

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((p) => !p);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className={s.header}>
      {isDiscountReminderOpen && (
        <DiscountReminder handleClose={handleCloseDiscountReminder} />
      )}
      <div className={s.headerWrap}>
        <Container className={s.flex}>
          <Logo className={s.logo} />

          <HeaderNav handleMenuToggle={handleMenuToggle} />
          <div className={s.rightSideWrap}>
            <LangSwitcher />
            <CartButton />
            <BurgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </Container>
      </div>

      {!media.isDesktop && (
        <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      )}
    </header>
  );
};

export default Header;
