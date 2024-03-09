import { Container, Logo, MainTitle } from 'shared/components';
import s from './Footer.module.scss';
import FooterNav from '../FooterNav/FooterNav';
import SocialIcons from '../SocialIcons/SocialIcons';
import Discount from '../Discount/Discount';
import Rights from '../Rights/Rights';
const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Logo />
        <FooterNav />
        <MainTitle title={'Брашити зубки - дозвілля для всієї родини'} />
        <SocialIcons />
        <Discount />
        <Rights />
      </Container>
    </footer>
  );
};

export default Footer;
