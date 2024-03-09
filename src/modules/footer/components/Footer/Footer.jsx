import { Container, Logo, MainTitle } from 'shared/components';
import s from './Footer.module.scss';
import FooterNav from '../FooterNav/FooterNav';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Logo />
        <FooterNav />
        <MainTitle title={'Some footer title'} />
        <SocialIcons />
        <h2>SaleForm</h2>
        <h2>FooterInfo</h2>
      </Container>
    </footer>
  );
};

export default Footer;
