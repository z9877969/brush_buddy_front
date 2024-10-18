import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageDialog } from 'modules/mainPageDialog';
import { MainPageBlog } from 'modules/mainPageBlog';
import { MainPageToShopping } from 'modules/mainPageToShopping';
import { MainPageReviews } from 'modules/mainPageReviews';
const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageDialog />
      <MainPageToShopping />
      <MainPageHelpers isDescrShow={false} />
      <MainPageBlog />
      <MainPageReviews />
    </>
  );
};

export default MainPage;
