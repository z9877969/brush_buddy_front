import { MainPageAbout } from 'modules/mainPageAbout';
import { MainPageHero } from 'modules/mainPageHero';
import { MainPageDialog } from 'modules/mainPageDialog';

const MainPage = () => {
  return (
    <>
      <MainPageHero />
      <MainPageAbout />
      <MainPageDialog />
    </>
  );
};

export default MainPage;
