import { AboutBlog } from 'modules/aboutBlog';
import { AboutHero } from 'modules/aboutHero';
import { SomeHumor } from 'modules/someHumor';
import { Button, MainTitle, ProductCardItem } from 'shared/components';

const AboutPage = () => {
  return (
    <>
      <MainTitle title={'some title'} className={'some-class'} light />
      <AboutHero />
      <AboutBlog />
      <Button title={'Button title'} border />
      <ProductCardItem />
      <SomeHumor />
    </>
  );
};

export default AboutPage;
