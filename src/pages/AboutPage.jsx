import { AboutHero } from 'modules/aboutHero';
import { Button, MainTitle, ProductCardItem } from 'shared/components';

const AboutPage = () => {
  return (
    <>
      <MainTitle title={'some title'} className={'some-class'} light />
      <AboutHero />
      <Button title={'Button title'} border />
      <ProductCardItem />
    </>
  );
};

export default AboutPage;
