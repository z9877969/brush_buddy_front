import { AboutHero } from 'modules/aboutHero';
import { Button, MainTitle, ProductCardItem } from 'shared/components';

const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <MainTitle title={'some title'} className={'some-class'} light />
      <AboutHero />
      <Button title={'Button title'} border />
      <ProductCardItem />
    </>
  );
};

export default AboutPage;
