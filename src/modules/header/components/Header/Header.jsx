import { Container } from 'shared/components';
import s from './Header.module.scss';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.flex}>
        Header
        <LangSwitcher />
      </Container>
    </header>
  );
};

export default Header;
