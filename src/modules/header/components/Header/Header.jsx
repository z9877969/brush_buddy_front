import { Container, Logo } from 'shared/components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import CartButton from '../CartButton/CartButton';
import DiscountReminder from '../DiscountReminder/DiscountReminder';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
  const [isDiscountReminderOpen, setDiscountReminderOpen] = useState(true);

  const handleCloseDiscountReminder = () => {
    setDiscountReminderOpen(false)
  }

  return (
    <header className={s.header}>
      {isDiscountReminderOpen && <DiscountReminder handleClose={handleCloseDiscountReminder} />}
      <Container className={s.flex}>
        <Link to={'/'}>
          <Logo className={s.logo}/>
        </Link>
        
        <HeaderNav />
        <div className={s.rightSideWrap}>
          <LangSwitcher />
          <CartButton />
          <button className={s.btnBurgerMenu}>
            <svg width="24" height="24">
              <use href="/src/shared/icons/sprite.svg#icon-burger"></use>
            </svg>
          </button>
        </div>    
      </Container>
    </header>
  );
};

export default Header;
