import { Container, Logo, MainTitle } from 'shared/components';
import s from './Footer.module.scss';
import FooterNav from '../FooterNav/FooterNav';
import SocialIcons from '../SocialIcons/SocialIcons';
import Discount from '../Discount/Discount';
import Rights from '../Rights/Rights';
const Footer = () => {
  return (
    <footer className={s.footer} id="footer">
      <Container>
        <div className={s.twoBlocks}>
          <div className={s.leftBlock}>
            <div className={s.topOfFooter}>
              <Logo />
              <FooterNav />
            </div>
            <div className={s.middleOfFooter}>
              <MainTitle title={'Брашити зубки - дозвілля для всієї родини'} />
              <SocialIcons />
            </div>
          </div>
          <Discount />
        </div>
        <Rights />
      </Container>
    </footer>
  );
};

export default Footer;
