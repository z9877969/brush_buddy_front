import { useState } from 'react';
import { Link } from 'react-router-dom';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import CartButton from '../CartButton/CartButton';
import DiscountReminder from '../DiscountReminder/DiscountReminder';
import HeaderNav from '../HeaderNav/HeaderNav';
import s from './Header.module.scss';
import { Container, Logo } from 'shared/components';
import BurgerButton from '../BurgerButton/BurgerButton';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isDiscountReminderOpen, setDiscountReminderOpen] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleCloseDiscountReminder = () => {
    setDiscountReminderOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.header}>
      {isDiscountReminderOpen && (
        <DiscountReminder handleClose={handleCloseDiscountReminder} />
      )}
      <div className={s.headerWrap}>
        <Container className={s.flex}>
          <Link to={'/'}>
            <Logo className={s.logo} />
          </Link>

          <HeaderNav handleMenuToggle={handleMenuToggle} />
          <div className={s.rightSideWrap}>
            <LangSwitcher />
            <CartButton />
            <BurgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </Container>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </header>
  );
};

export default Header;
