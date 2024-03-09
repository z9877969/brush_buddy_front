import { Container, Logo, MainTitle } from 'shared/components';
import s from './Footer.module.scss';
import FooterNav from '../FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Logo />
        <FooterNav />
        <MainTitle title={'Some footer title'} />
        <h2>SocialIcons</h2>
        <h2>SaleForm</h2>
        <h2>FooterInfo</h2>
      </Container>
    </footer>
  );
};

export default Footer;
