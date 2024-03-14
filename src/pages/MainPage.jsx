import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageDialog } from 'modules/mainPageDialog';
import { MainPageBlog } from 'modules/mainPageBlog';
import { MainPageToShopping } from 'modules/mainPageToShopping';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageDialog />
      <MainPageToShopping />
      <MainPageBlog />
      <MainPageHelpers />
    </>
  );
};

export default MainPage;
