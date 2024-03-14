import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageBlog } from 'modules/mainPageBlog';
import { MainPageToShopping } from 'modules/mainPageToShopping';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageToShopping />
      <MainPageBlog />
    </>
  );
};

export default MainPage;
