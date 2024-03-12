import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageBlog } from 'modules/mainPageBlog';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageBlog />
    </>
  );
};

export default MainPage;
