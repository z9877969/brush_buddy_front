import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageBlog } from 'modules/mainPageBlog';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageBlog />
      <MainPageHelpers />
    </>
  );
};

export default MainPage;
