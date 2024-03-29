import { AboutBlog } from 'modules/aboutBlog';
import { AboutHero } from 'modules/aboutHero';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { SomeHumor } from 'modules/someHumor';
import { MainTitle } from 'shared/components';

const AboutPage = () => {
  return (
    <>
      <MainTitle title={'some title'} className={'some-class'} light />
      <AboutHero />
      <AboutBlog />
      <MainPageHelpers isDescrShow={true} />
      <SomeHumor />
    </>
  );
};

export default AboutPage;
