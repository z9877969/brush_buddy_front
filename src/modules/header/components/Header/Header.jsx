import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import LangSwitcher from '../LangSwitcher/LangSwitcher';
import CartButton from '../CartButton/CartButton';
import DiscountReminder from '../DiscountReminder/DiscountReminder';
import HeaderNav from '../HeaderNav/HeaderNav';
import s from './Header.module.scss';
import { Container, Logo } from 'shared/components';
import BurgerButton from '../BurgerButton/BurgerButton';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useMedia } from 'hooks/useMedia';
import { setHeightAction } from '@redux/header/headerSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isDiscountReminderOpen, setDiscountReminderOpen] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const media = useMedia();

  const headerRef = useRef(null);

  const handleCloseDiscountReminder = () => {
    setDiscountReminderOpen(false);
  };

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((p) => !p);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    dispatch(setHeightAction(headerRef.current.clientHeight));
  }, [isDiscountReminderOpen, dispatch]);

  return (
    <header className={s.header} ref={headerRef}>
      {isDiscountReminderOpen && (
        <DiscountReminder handleClose={handleCloseDiscountReminder} />
      )}
      <div className={s.headerWrap}>
        <Container className={s.flex}>
          <Logo className={s.logo} />

          <HeaderNav handleMenuToggle={handleMenuToggle} />
          <div className={s.rightSideWrap}>
            {/* <LangSwitcher /> */}
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
