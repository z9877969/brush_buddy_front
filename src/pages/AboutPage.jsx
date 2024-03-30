import { AboutBlog } from 'modules/aboutBlog';
import { AboutHero } from 'modules/aboutHero';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { SomeHumor } from 'modules/someHumor';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutBlog />
      <MainPageHelpers isDescrShow={true} />
      <SomeHumor />
    </>
  );
};

export default AboutPage;
