import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHelpers } from 'modules/mainPageHelpers';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageDialog } from 'modules/mainPageDialog';
import { MainPageBlog } from 'modules/mainPageBlog';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageDialog />
      <MainPageBlog />
      <MainPageHelpers />
    </>
  );
};

export default MainPage;
