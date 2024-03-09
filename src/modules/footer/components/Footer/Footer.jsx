import { Container, Logo, MainTitle } from 'shared/components';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Logo />
        <MainTitle title={'Some footer title'} />
      </Container>
    </footer>
  );
};

export default Footer;
